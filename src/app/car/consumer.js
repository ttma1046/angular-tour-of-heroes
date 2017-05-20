"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
var Engine2_1 = require("./Engine2");
var tires_1 = require("./tires");
var Consumer = (function () {
    function Consumer() {
        this.bigCylinders = 12;
        var car = new car_1.Car(new Engine2_1.Engine2(this.bigCylinders), new tires_1.Tires());
    }
    return Consumer;
}());
exports.Consumer = Consumer;
//# sourceMappingURL=consumer.js.map