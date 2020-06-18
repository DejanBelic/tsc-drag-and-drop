class ProjectInput  {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;
	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;

	constructor() {
		this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
		this.hostElement = <HTMLDivElement> document.getElementById('app')!;
		const importedNode = document.importNode(this.templateElement.content, true);
		this.element = importedNode.firstElementChild as HTMLFormElement;
		this.titleInputElement = document.querySelector('#title') as HTMLInputElement;
		this.descriptionInputElement = document.querySelector('#description') as HTMLInputElement;
		this.peopleInputElement = document.querySelector('#people') as HTMLInputElement;
 		this.element.id = 'user-input';
 		this.configure();
		this.attach();
	}

	private attach() {
		this.hostElement.insertAdjacentElement('afterbegin', this.element);
	}

	private submitHandler(event: Event) {
		event.preventDefault();

	}

	private configure() {
		this.element.addEventListener('submit', this.submitHandler.bind(this));
	}
}

const prjInput = new ProjectInput();
