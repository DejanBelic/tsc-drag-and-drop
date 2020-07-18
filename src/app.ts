function merge<T extends Object, U extends Object>(objA: T, objB: U) {
return Object.assign(objA, objB);
}

const mergedObj = 	merge({name: 'Dejan'}, {age: 28})

console.log(mergedObj.name)

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = 'Got no value';
	if (element.length === 1) {
		descriptionText = 'Got 1 element';
	} else if (element.length > 1) {
		descriptionText = 'Got ' + element.length  + 'elements';
	}
	return [element, descriptionText]
}

console.log(countAndDescribe('Hi there'));

function extractAndConvert<T extends Object, U extends keyof T>(obj: T, key: U) {
	return 'Value' + obj[key];
}

console.log(extractAndConvert({name: 'Dejan'}, 'name'));
