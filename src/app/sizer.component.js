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
var SizerComponent = (function () {
    function SizerComponent() {
        this.sizeChange = new core_1.EventEmitter();
    }
    SizerComponent.prototype.dec = function () { this.resize(-1); };
    SizerComponent.prototype.inc = function () { this.resize(+1); };
    SizerComponent.prototype.resize = function (delta) {
        this.size = Math.min(40, Math.max(8, +this.size + delta));
        this.sizeChange.emit(this.size);
    };
    return SizerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SizerComponent.prototype, "size", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SizerComponent.prototype, "sizeChange", void 0);
SizerComponent = __decorate([
    core_1.Component({
        selector: 'my-sizer',
        template: "\n\t<div>\n\t\t<button (click)=\"dec()\" title=\"smaller\">-</button>\n\t\t<button (click)=\"inc()\" title=\"bigger\">+</button>\n\t\t<label [style.font-size.px]=\"size\">FontSize: {{size}}px</label>\n\t</div>"
    })
], SizerComponent);
exports.SizerComponent = SizerComponent;
//# sourceMappingURL=sizer.component.js.map