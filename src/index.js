"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@ionic-native/core");
var core_2 = require("@angular/core");
var Naver = (function (_super) {
    __extends(Naver, _super);
    function Naver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Naver.prototype.login = function () {
        return;
    };
    Naver.prototype.logout = function () {
        return;
    };
    Naver.prototype.logoutAndDeleteToken = function () {
        return;
    };
    Naver.prototype.refreshAccessToken = function () {
        return;
    };
    Naver.prototype.getState = function () {
        return;
    };
    Naver.prototype.requestApi = function (url) {
        return;
    };
    Naver.prototype.requestMe = function () {
        return;
    };
    return Naver;
}(core_1.IonicNativePlugin));
__decorate([
    core_1.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Naver.prototype, "login", null);
__decorate([
    core_1.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Naver.prototype, "logout", null);
__decorate([
    core_1.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Naver.prototype, "logoutAndDeleteToken", null);
__decorate([
    core_1.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Naver.prototype, "refreshAccessToken", null);
__decorate([
    core_1.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Naver.prototype, "getState", null);
__decorate([
    core_1.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Naver.prototype, "requestApi", null);
__decorate([
    core_1.Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Naver.prototype, "requestMe", null);
Naver = __decorate([
    core_1.Plugin({
        pluginName: 'Naver',
        plugin: 'cordova-plugin-naver',
        pluginRef: 'Naver',
        platforms: ['Android']
    }),
    core_2.Injectable()
], Naver);
exports.Naver = Naver;
//# sourceMappingURL=index.js.map