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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
// import { HeroService } from './hero.service';
var hero_service_provider_1 = require("./hero.service.provider");
var app_config_1 = require("../app/app-config");
var logger_service_1 = require("../app/logger.service");
var HeroesComponent = (function () {
    function HeroesComponent(config, logger) {
        this.logger = logger;
        this.title = config.title;
        var some_message = 'log some logs';
        if (this.logger) {
            this.logger.log(some_message);
        }
    }
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        template: "\n        <h2>Heroes</h2>\n        <hero-list></hero-list>\n     ",
        providers: [
            hero_service_provider_1.heroServiceProvider,
            { provide: app_config_1.APP_CONFIG, useValue: app_config_1.HERO_DI_CONFIG }
        ]
    }),
    __param(0, core_2.Inject(app_config_1.APP_CONFIG)), __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [Object, logger_service_1.Logger])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map