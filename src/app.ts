type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
}

type ElevatedEmployee = Admin & Employee;
// interface ElevatedEmployee  extends  Admin, Employee {};

const e1: ElevatedEmployee = {
	name: 'Dejan',
	privileges: ['create-server'],
	startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log(emp.name);
	if ('privileges' in emp) {
		console.log(emp.privileges)
	}
	if ('startDate' in emp) {
		console.log(emp.startDate)
	}
}

class Car {
	drive() {
		console.log('Drive car');
	}
}

class Truck {
	drive() {
		console.log('Drive truck')
	}
	loadCargo(amount: number) {
		console.log('Loading cargo', amount)
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000);
	}
}

useVehicle(v1);
useVehicle(v2);
