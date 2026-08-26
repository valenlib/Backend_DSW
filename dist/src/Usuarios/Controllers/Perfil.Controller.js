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
var _a, _b, _c, _d;
import { Controller, Patch, Body, Delete } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { ActualizarPerfilDto } from './dto/actualizar-perfil.dto';
import { LogicalDeletePerfilDto } from './dto/logical-delete-perfil.dto';
import { DeletePerfilDto } from './dto/delete-perfil.dto';
import { ApiResponse } from '../common/api-response';
let PerfilController = class PerfilController {
    constructor(perfilService) {
        this.perfilService = perfilService;
    }
    async actualizarPerfil(perfilRequest) {
        const response = await this.perfilService.actualizarPerfil(perfilRequest);
        return ApiResponse.success('Perfil actualizado exitosamente', response);
    }
    async logicalDelete(perfilRequest) {
        const response = await this.perfilService.logicalDelete(perfilRequest);
        return ApiResponse.success('Perfil eliminado lógicamente exitosamente', response);
    }
    async delete(perfilRequest) {
        const response = await this.perfilService.delete(perfilRequest);
        return ApiResponse.success('Perfil eliminado exitosamente', response);
    }
};
__decorate([
    Patch('actualizar'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof ActualizarPerfilDto !== "undefined" && ActualizarPerfilDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "actualizarPerfil", null);
__decorate([
    Patch('logicalDelete'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof LogicalDeletePerfilDto !== "undefined" && LogicalDeletePerfilDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "logicalDelete", null);
__decorate([
    Delete('delete'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof DeletePerfilDto !== "undefined" && DeletePerfilDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "delete", null);
PerfilController = __decorate([
    Controller('perfil'),
    __metadata("design:paramtypes", [typeof (_a = typeof PerfilService !== "undefined" && PerfilService) === "function" ? _a : Object])
], PerfilController);
export { PerfilController };
//# sourceMappingURL=Perfil.Controller.js.map