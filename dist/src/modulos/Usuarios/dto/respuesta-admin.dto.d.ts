declare class RespuestaAdminDto {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    rol: "admin" | "usuario";
    constructor(id: number, nombre: string, apellido: string, email: string, rol: "admin" | "usuario");
}
export default RespuestaAdminDto;
//# sourceMappingURL=respuesta-admin.dto.d.ts.map