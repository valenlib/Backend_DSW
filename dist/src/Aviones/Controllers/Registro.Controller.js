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
var _a, _b;
let RegistroController = class RegistroController {
    constructor(registroService) {
        this.registroService = registroService;
    }
    async registrarUsuario(usuario) {
        const response = await this.registroService.registrarUsuario(usuario);
        return ApiResponse.success('Registro exitoso', response);
    }
};
__decorate([
    Post('registrar'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Usuario !== "undefined" && Usuario) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], RegistroController.prototype, "registrarUsuario", null);
RegistroController = __decorate([
    Controller('Registro'),
    __metadata("design:paramtypes", [typeof (_a = typeof RegistroService !== "undefined" && RegistroService) === "function" ? _a : Object])
], RegistroController);
export { RegistroController };
//# sourceMappingURL=Registro.Controller.js.map