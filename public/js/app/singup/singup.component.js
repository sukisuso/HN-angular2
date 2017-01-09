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
var SingupComponent = (function () {
    function SingupComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.client = {};
        this.errorInLogin = false;
    }
    SingupComponent.prototype.createNewUser = function () {
        var _this = this;
        this.errorInLogin = false;
        this.loginService.signup(this.client).subscribe(function (success) {
            if (success) {
                _this.router.navigate(['/']);
            }
            else {
                _this.errorInLogin = true;
            }
        });
    };
    return SingupComponent;
}());
SingupComponent = __decorate([
    core_1.Component({
        selector: 'signup',
        templateUrl: '/templates/singup.html',
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
], SingupComponent);
exports.SingupComponent = SingupComponent;
