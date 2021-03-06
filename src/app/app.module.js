"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_modules_1 = require("./app-routing.modules");
var core_module_1 = require("./core/core.module");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard.component");
var heroes_component_1 = require("./heroes.component");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_search_component_1 = require("./hero-search.component");
var hero_form_component_1 = require("./hero-form.component");
var sizer_component_1 = require("./sizer.component");
var hola_component_1 = require("./hola.component");
var hero_service_1 = require("./hero/hero.service");
var logger_service_1 = require("./logger.service");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./external/in-memory-data.service");
var app_config_1 = require("./app-config");
var silentLogger = {
    logs: ['Silent logger says "Shhh!". Provided via "useValue"'],
    log: function () { }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_modules_1.AppRoutingModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            core_module_1.CoreModule
        ],
        declarations: [
            app_component_1.AppComponent,
            heroes_component_1.HeroesComponent,
            hero_detail_component_1.HeroDetailComponent,
            dashboard_component_1.DashboardComponent,
            hero_search_component_1.HeroSearchComponent,
            hero_form_component_1.HeroFormComponent,
            sizer_component_1.SizerComponent,
            hola_component_1.HolaComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            hero_service_1.HeroService,
            logger_service_1.Logger,
            // UserService,
            // NewLogger,
            // { provide: Logger, useClass: EvenBetterLogger },
            // { provide: Logger, useClass: Logger },
            // { provide: Logger, useClass: BetterLogger },
            // { provide: Logger, useExisting: NewLogger },
            { provide: app_config_1.APP_CONFIG, useValue: app_config_1.HERO_DI_CONFIG },
            { provide: logger_service_1.Logger, useValue: silentLogger }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map