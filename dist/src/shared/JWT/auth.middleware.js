import { HttpError } from '../error-handler';
import { validarToken } from './AuthJWT';
export function authMiddleware(req, res, next) {
    const authorization = req.headers.authorization;
    const [scheme, token] = authorization?.split(' ') ?? [];
    const payload = scheme === 'Bearer' && token ? validarToken(token) : null;
    if (!payload) {
        next(new HttpError('Debe enviar un token de acceso válido', 401));
        return;
    }
    req.auth = payload;
    next();
}
export function requireRole(...roles) {
    return (req, res, next) => {
        if (!req.auth || !roles.includes(req.auth.rol)) {
            next(new HttpError('No tiene permisos para realizar esta operación', 403));
            return;
        }
        next();
    };
}
export function requireSelfOrRole(...roles) {
    return (req, res, next) => {
        const requestedId = Number(req.params.id);
        if (req.auth &&
            (roles.includes(req.auth.rol) || req.auth.id === requestedId)) {
            next();
            return;
        }
        next(new HttpError('No tiene permisos para acceder a este recurso', 403));
    };
}
//# sourceMappingURL=auth.middleware.js.map