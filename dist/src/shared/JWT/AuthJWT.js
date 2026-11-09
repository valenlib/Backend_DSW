import jwt from "jsonwebtoken";
import { HttpError } from "../error-handler.js";
function getSecret() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new HttpError("La configuración JWT_SECRET no está definida", 500);
    }
    return secret;
}
export function generarToken(payload, expiresIn = process.env.JWT_EXPIRES_IN ?? "15m") {
    return jwt.sign(payload, getSecret(), { expiresIn });
}
export function validarToken(token, expectedType = "access") {
    try {
        const payload = jwt.verify(token, getSecret());
        if (typeof payload === "string" ||
            typeof payload.id !== "number" ||
            typeof payload.email !== "string" ||
            (payload.rol !== "admin" && payload.rol !== "usuario") ||
            payload.type !== expectedType) {
            return null;
        }
        return payload;
    }
    catch {
        return null;
    }
}
export function obtenerExpiracionToken(token) {
    const payload = jwt.decode(token);
    if (typeof payload !== "object" ||
        payload === null ||
        typeof payload.exp !== "number") {
        throw new HttpError("El token no contiene una expiración válida", 500);
    }
    return new Date(payload.exp * 1000);
}
//# sourceMappingURL=AuthJWT.js.map