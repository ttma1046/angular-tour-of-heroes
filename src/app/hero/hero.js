"use strict";
var Hero = (function () {
    function Hero(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    Hero.prototype.createOneHero = function () {
        var myHero = new Hero(42, 'skyDog', 'Fetch any object at any distance', 'Leslie Rollover');
        console.log('My hero is called ' + myHero.name);
    };
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map