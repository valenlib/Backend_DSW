import { JwtPayload } from "jsonwebtoken";
export type UserRole = "admin" | "usuario";
export interface AuthPayload extends JwtPayload {
    id: number;
    email: string;
    rol: UserRole;
    type: "access" | "refresh";
}
export declare function generarToken(payload: Omit<AuthPayload, "iat" | "exp">, expiresIn?: string): string;
export declare function validarToken(token: string, expectedType?: AuthPayload["type"]): AuthPayload | null;
export declare function obtenerExpiracionToken(token: string): Date;
//# sourceMappingURL=AuthJWT.d.ts.map