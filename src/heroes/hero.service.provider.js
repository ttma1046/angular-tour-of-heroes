"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_service_1 = require("../app/logger.service");
var user_service_1 = require("../app/user.service");
var hero_service_1 = require("./hero.service");
var heroServiceFactory = function (logger, userService) {
    return new hero_service_1.HeroService(logger, userService.user.isAuthorized);
};
exports.heroServiceProvider = {
    provide: hero_service_1.HeroService,
    useFactory: heroServiceFactory,
    deps: [logger_service_1.Logger, user_service_1.UserService]
};
//# sourceMappingURL=hero.service.provider.js.map