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
var _a, _b, _c;
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiResponse } from '../common/api-response';
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(userRequest) {
        const response = await this.authService.login(UserRequest);
        return ApiResponse.success('Login exitoso', response);
    }
    async logout(userRequest) {
        const response = await this.authService.logout(userRequest);
        return ApiResponse.success('Logout exitoso', response);
    }
};
__decorate([
    Post('login'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof loginUserDto !== "undefined" && loginUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    Post('logout'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof logoutUserDto !== "undefined" && logoutUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    Controller('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof AuthService !== "undefined" && AuthService) === "function" ? _a : Object])
], AuthController);
export { AuthController };
//# sourceMappingURL=Auth.Controller.js.map