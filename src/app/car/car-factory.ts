import { Engine } from './engine';
import { Car } from './car';
import { Tires } from './tires';

// BAD pattern!
export class CarFactory {
    createCar() {
        let car = new Car(this.createEngine(), this.createTires());
        car.description = 'Factory';
    }

    createEngine() {
        return new Engine();
    }

    createTires() {
        return new Tires();
    }
}

// Good Pattern
// let car = injector.get(Car);
