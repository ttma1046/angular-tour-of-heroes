"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var HolaComponent = (function () {
    function HolaComponent() {
        this.OutputSize = 20;
        this.fontSizePx = 15;
        this.canSave = true;
        this.isUnchanged = false;
        this.isSpecial = true;
        // code...
    }
    HolaComponent.prototype.ngOnInit = function () {
        this.setCurrentClasses();
        this.setCurrentStyles();
    };
    HolaComponent.prototype.output = function (size) {
        this.OutputSize = size;
    };
    HolaComponent.prototype.setCurrentClasses = function () {
        this.currentClasses = {
            saveable: this.canSave,
            modified: !this.isUnchanged,
            special: this.isSpecial
        };
    };
    HolaComponent.prototype.setCurrentStyles = function () {
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-weight': !this.isUnchanged ? 'bold' : 'normal',
            'font-size': this.isSpecial ? '24px' : '12px'
        };
    };
    return HolaComponent;
}());
HolaComponent = __decorate([
    core_1.Component({
        selector: 'hola-component',
        templateUrl: './hola.component.html'
    }),
    __metadata("design:paramtypes", [])
], HolaComponent);
exports.HolaComponent = HolaComponent;
//# sourceMappingURL=hola.component.js.map