function merge<T, U>(objA: T, objB: U) {
return Object.assign(objA, objB);
}

const mergedObj = 	merge({name: 'Dejan'}, {age: 28})

console.log(mergedObj.name)
