declare class RespuestaLoginDto {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    rol: "admin" | "usuario";
    accessToken: string;
    refreshToken: string;
    constructor(id: number, nombre: string, apellido: string, email: string, rol: "admin" | "usuario", accessToken: string, refreshToken: string);
}
export default RespuestaLoginDto;
//# sourceMappingURL=respuesta-login.dto.d.ts.map