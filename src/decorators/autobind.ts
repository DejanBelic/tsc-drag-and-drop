// autobind decorator
namespace App {
	export function autobind(
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
}
