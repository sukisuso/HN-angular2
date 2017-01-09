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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var header_component_1 = require("./headers/header.component");
var footer_component_1 = require("./headers/footer.component");
var menu_component_1 = require("./headers/menu.component");
var singup_component_1 = require("./singup/singup.component");
var default_component_1 = require("./singup/default.component");
var main_component_1 = require("./main/main.component");
var news_component_1 = require("./content/news.component");
var assets_component_1 = require("./content/assets.component");
var invest_component_1 = require("./content/invest.component");
var appRoutes = [
    { path: 'home', component: default_component_1.DefaultComponent },
    { path: 'singup', component: singup_component_1.SingupComponent },
    { path: 'm', component: main_component_1.MainComponent },
    { path: 'p', component: assets_component_1.AssetsComponent },
    { path: 'n', component: news_component_1.NewsComponent },
    { path: 's', component: invest_component_1.InvestComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, header_component_1.ngHeader, footer_component_1.ngFooter, singup_component_1.SingupComponent, default_component_1.DefaultComponent, main_component_1.MainComponent, menu_component_1.ngMenu,
            assets_component_1.AssetsComponent, news_component_1.NewsComponent, invest_component_1.InvestComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
