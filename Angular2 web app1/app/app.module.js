"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var kendo_angular_inputs_1 = require("@progress/kendo-angular-inputs");
var kendo_angular_dateinputs_1 = require("@progress/kendo-angular-dateinputs");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var products_component_1 = require("./products.component");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            kendo_angular_grid_1.GridModule,
            kendo_angular_inputs_1.InputsModule,
            kendo_angular_dateinputs_1.DateInputsModule,
            kendo_angular_dropdowns_1.DropDownsModule,
            router_1.RouterModule.forRoot([
                { path: 'products', component: products_component_1.ProductsComponent },
                { path: 'appcomponent', component: app_component_1.AppComponent }
            ])
        ],
        declarations: [
            products_component_1.ProductsComponent,
            app_component_1.AppComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map