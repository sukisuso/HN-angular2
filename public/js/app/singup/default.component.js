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
var login_service_1 = require("../service/login.service");
var user_service_1 = require("../service/user.service");
var DefaultComponent = (function () {
    function DefaultComponent(loginService, router, userService) {
        var _this = this;
        this.loginService = loginService;
        this.router = router;
        this.userService = userService;
        this.client = {};
        this.errorLoginIn = false;
        loginService.isAuth().subscribe(function (user) {
            if (user) {
                _this.userService.setUser(user);
                _this.router.navigate(['m']);
            }
        });
    }
    DefaultComponent.prototype.loginAction = function () {
        var _this = this;
        this.errorLoginIn = false;
        this.loginService.login(this.client).subscribe(function (user) {
            if (user) {
                _this.userService.setUser(user);
                _this.router.navigate(['m']);
            }
            else {
                _this.errorLoginIn = true;
            }
        });
    };
    return DefaultComponent;
}());
DefaultComponent = __decorate([
    core_1.Component({
        selector: 'default',
        templateUrl: '/templates/login.html',
        providers: [login_service_1.LoginService, user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router, user_service_1.UserService])
], DefaultComponent);
exports.DefaultComponent = DefaultComponent;
