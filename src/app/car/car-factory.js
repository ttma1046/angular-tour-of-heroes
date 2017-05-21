"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = require("./engine");
var car_1 = require("./car");
var tires_1 = require("./tires");
// BAD pattern!
var CarFactory = (function () {
    function CarFactory() {
    }
    CarFactory.prototype.createCar = function () {
        var car = new car_1.Car(this.createEngine(), this.createTires());
        car.description = 'Factory';
    };
    CarFactory.prototype.createEngine = function () {
        return new engine_1.Engine();
    };
    CarFactory.prototype.createTires = function () {
        return new tires_1.Tires();
    };
    return CarFactory;
}());
exports.CarFactory = CarFactory;
// Good Pattern
// let car = injector.get(Car);
//# sourceMappingURL=car-factory.js.map