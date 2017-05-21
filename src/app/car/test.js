"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = require("./engine");
var tires_1 = require("./tires");
var car_1 = require("./car");
var Test = (function () {
    function Test() {
        var car = new car_1.Car(new MockEngine(), new MockTires());
    }
    return Test;
}());
exports.Test = Test;
var expectedHeroes = [{ name: 'A' }, { name: 'B' }];
var mockService = { getHeroes: function () { return expectedHeroes; } };
it('should have heroes when HeroListComponent created', function () {
    var hlc = new HeroListComponent(mockService);
    expect(hlc.heroes.length).toEqual(expectedHeroes.length);
});
var MockEngine = (function (_super) {
    __extends(MockEngine, _super);
    function MockEngine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cylinders = 8;
        return _this;
    }
    return MockEngine;
}(engine_1.Engine));
var MockTires = (function (_super) {
    __extends(MockTires, _super);
    function MockTires() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.make = 'YokoGoodStore';
        return _this;
    }
    return MockTires;
}(tires_1.Tires));
//# sourceMappingURL=test.js.map