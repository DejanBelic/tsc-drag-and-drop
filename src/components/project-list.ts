

import {Component} from "./base-component.js";
import {Project, ProjectStatus} from "../models/project.js";
import {DragTarget} from "../models/drag-drop";
import {autobind} from "../decorators/autobind.js";
import {ProjectItem} from "./project-item.js";
import {projectState} from "../state/project-state.js";

	// project list class
	export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {

		assignedProjects: Project[] = [];

		constructor(private type: 'active' | 'finished') {
			super('project-list','app',false,`${type}-projects`);

			this.assignedProjects = [];

			this.configure();
			this.renderContent();
		}

		@autobind
		dragOverHandler(event: DragEvent): void {
			if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
				event.preventDefault();
				const listEl = this.element.querySelector('ul')!;
				listEl.classList.add('droppable');
			}
		}
		@autobind
		dropHandler(event: DragEvent): void {
			const prjId = event.dataTransfer!.getData('text/plain');
			projectState.moveProject(prjId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
		}
		@autobind
		dragLeaveHandler(_: DragEvent): void {
			const listEl = this.element.querySelector('ul')!;
			listEl.classList.remove('droppable')
		}

		configure(): void {
			this.element.addEventListener('dragover', this.dragOverHandler);
			this.element.addEventListener('dragleave', this.dragLeaveHandler);
			this.element.addEventListener('drop', this.dropHandler);
			projectState.addListener((projects: Project[]) => {
				const relevantProjects = projects.filter(proj => {
					if (this.type === 'active') {
						return proj.status === ProjectStatus.Active
					} else {
						return proj.status === ProjectStatus.Finished
					}

				});
				this.assignedProjects = relevantProjects;
				this.renderProjects();
			});
		}

		renderProjects() {
			const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
			listEl.innerHTML = '';
			for (const prjItem of this.assignedProjects) {
				new ProjectItem(this.element.querySelector('ul')!.id, prjItem)
			}
		}

		renderContent() {
			const listId = `${this.type}-projects-list`;
			this.element.querySelector('ul')!.id = listId;
			this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
		}
	}
