"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = (function () {
    /*
    constructor() {
        this.engine = new Engine();
        this.tires = new Tires();
    }
    */
    function Car(engine, tires) {
        this.engine = engine;
        this.tires = tires;
        // public engine: Engine;
        // public tires: Tires;
        this.description = 'No DI';
        // code...
    }
    // Method using the engine and tries
    Car.prototype.drive = function () {
        return this.description + " car with " +
            (this.engine.cylinders + " cylinders and " + this.tires.make + " tires.");
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=car.js.map