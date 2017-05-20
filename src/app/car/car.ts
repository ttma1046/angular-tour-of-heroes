import { Engine } from './engine';
import { Tires } from './tires';


export class Car {
    // public engine: Engine;
    // public tires: Tires;
    public description = 'No DI';
    /*
    constructor() {
        this.engine = new Engine();
        this.tires = new Tires();
    }
	*/

    constructor(public engine: Engine, public tires: Tires) {
		// code...
    }

    // Method using the engine and tries
    drive() {
        return `${this.description} car with ` +
        `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
    }
}
