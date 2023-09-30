export = Kromos;
export as namespace Kromos;

declare namespace Kromos {
	
	type Prettify<T> = {
		[K in keyof T]: T[K]
	};
}