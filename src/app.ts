function Logger(constructor: Function) {
	console.log('Logging...');
	console.log(constructor);
}

@Logger
class Person {
	name = 'Dejan';
	constructor() {
		console.log('Creating a person object...')
	}
}

const pers = new Person();

console.log(pers);
