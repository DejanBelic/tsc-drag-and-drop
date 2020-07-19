function Logger(logString: string) {
	return function(constructor: Function) {
		console.log('Logging...');
		console.log(constructor);
	}
}

function Log(target: any, propertyName: string | Symbol) {
	console.log('Property decorator!');
	console.log(target, propertyName);
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

@Logger('LOGGIN - PERSON')
@withTemplate('<h1>My person object </h1>', 'app')
class Person {
	name = 'Dejan';
	constructor() {
		console.log('Creating a person object...')
	}
}

const pers = new Person();

console.log(pers);

class Product {
	@Log
	title: string;
	private _price: number;

	set price(val: number) {
		if (val > 0) {
			this._price = val
		} else {
			throw new Error('Invalid price should be positive.')
		}
	}

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}

	getPriceWithTax(tax: number) {
		return this._price * (1 + tax);
	}
}
