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
var router_1 = require("@angular/router");
var ngMenu = (function () {
    function ngMenu(router) {
        this.router = router;
        this.isClassVisible = false;
    }
    ngMenu.prototype.showCloseContent = function () {
        this.isClassVisible = !this.isClassVisible;
    };
    ngMenu.prototype.closeSession = function () {
        this.router.navigate(['/home']);
    };
    return ngMenu;
}());
ngMenu = __decorate([
    core_1.Component({
        selector: 'ng-menu',
        template: "\n    <nav class=\"navbar navbar-fixed-left navbar-minimal animate\" [ngClass]=\"{'open': isClassVisible }\" role=\"navigation\">\n\t\t<div class=\"navbar-toggler animate\" (click)=\"showCloseContent();\">\n\t\t\t<span class=\"menu-icon\"></span>\n\t\t</div>\n\t\t<ul class=\"navbar-menu animate\">\n\t\t\t<li>\n\t\t\t\t<a href=\"#\" [routerLink]=\"['/m']\" class=\"animate\">\n\t\t\t\t\t<span class=\"desc animate\"> Inicio</span>\n\t\t\t\t\t<span class=\"glyphicon glyphicon-user\"></span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"#\" [routerLink]=\"['/s']\" class=\"animate\">\n\t\t\t\t\t<span class=\"desc animate\"> Invertir</span>\n\t\t\t\t\t<span class=\"glyphicon glyphicon-search\"></span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"#\" [routerLink]=\"['/p']\" class=\"animate\">\n\t\t\t\t\t<span class=\"desc animate\"> A\u00F1adir Activos </span>\n\t\t\t\t\t<span class=\"glyphicon glyphicon-home\"></span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"#\" [routerLink]=\"['/n']\" class=\"animate\">\n\t\t\t\t\t<span class=\"desc animate\"> Noticias </span>\n\t\t\t\t\t<span class=\"glyphicon glyphicon-send\"></span>\n\t\t\t\t</a>\n\t\t\t</li>\n      \t<li>\n\t\t\t\t<a href=\"#\"  (click)=\"closeSession()\" class=\"animate\">\n\t\t\t\t\t<span class=\"desc animate\"> Salir </span>\n\t\t\t\t\t<span class=\"glyphicon glyphicon-log-out\"></span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</nav>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ngMenu);
exports.ngMenu = ngMenu;
