function Logger(logString: string) {
	return function(constructor: Function) {
		console.log('Logging...');
		console.log(constructor);
	}
}

function withTemplate(template: string, hookId: string) {
	return function (constructor: any) {
		const hookEl = document.getElementById(hookId);
		const p = new constructor();
		if (hookEl) {
			hookEl.innerHTML = template;
			hookEl.querySelector('h1')!.textContent = p.name;
		}
	}
}

// @Logger('LOGGIN - PERSON')
@withTemplate('<h1>My person object </h1>', 'app')
class Person {
	name = 'Dejan';
	constructor() {
		console.log('Creating a person object...')
	}
}

const pers = new Person();

console.log(pers);
