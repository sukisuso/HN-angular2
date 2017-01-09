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
var adresstypes_service_1 = require("../service/adresstypes.service");
var AssetsComponent = (function () {
    function AssetsComponent(adressService) {
        var _this = this;
        this.adressService = adressService;
        this.houseData = {};
        this.indexPage = 1;
        this.adressService.getAdressTypes().subscribe(function (data) {
            _this.adressTypes = data;
        });
        this.adressService.getPropertyTypes().subscribe(function (data) {
            _this.propertyTypes = data;
        });
    }
    AssetsComponent.prototype.showNext = function () {
        this.indexPage++;
    };
    AssetsComponent.prototype.showPrev = function () {
        this.indexPage--;
    };
    return AssetsComponent;
}());
AssetsComponent = __decorate([
    core_1.Component({
        selector: 'assets',
        templateUrl: '/templates/content/assets.html',
        providers: [adresstypes_service_1.AdressTypesService]
    }),
    __metadata("design:paramtypes", [adresstypes_service_1.AdressTypesService])
], AssetsComponent);
exports.AssetsComponent = AssetsComponent;
