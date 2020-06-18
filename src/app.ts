// autobind decorator
function autobind(
	_: any,
	_2: string,
	descrpitor: PropertyDescriptor
) {
	const originalMethod = descrpitor.value;
	const adjustedDescriptor: PropertyDescriptor = {
		configurable: true,
		get(): any {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		}
	};
	return adjustedDescriptor;
}

// project input class
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
		this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
		this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
		this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
 		this.element.id = 'user-input';
 		this.configure();
		this.attach();
	}

	private attach() {
		this.hostElement.insertAdjacentElement('afterbegin', this.element);
	}

	private gatherUserInput(): [string, string, number] | void {
			const enteredTitle = this.titleInputElement.value;
			const enteredDescription = this.descriptionInputElement.value;
			const enteredPeople = this.peopleInputElement.value;

			if (
				enteredTitle.trim().length === 0 ||
				enteredDescription.trim().length === 0 ||
				enteredPeople.trim().length === 0
			) {
				alert('Invalid input please try again')
				return ;
			}
			else {
				return [enteredTitle, enteredDescription, +enteredPeople]
			}
	}

	clearInput() {
		this.titleInputElement.value = '';
		this.descriptionInputElement.value = '';
		this.peopleInputElement.value = '';
	}

	@autobind
	private submitHandler(event: Event) {
		event.preventDefault();
		const userInput = this.gatherUserInput();
		if (Array.isArray(userInput)) {
			const [title, description, people] = userInput;
			console.log(title, description, people)
			this.clearInput();
		}
		console.log(this.titleInputElement.value)
	}

	private configure() {
		this.element.addEventListener('submit', this.submitHandler);
	}
}

const prjInput = new ProjectInput();
