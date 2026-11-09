import bcrypt from 'bcrypt';
import { createHash } from 'node:crypto';
import AuthService from '../Services/Auth.Service';
import RespuestaLoginDto from '../dto/respuesta-login.dto';
import db from '../../../shared/conn.mysql';
import { generarToken, obtenerExpiracionToken, validarToken, } from '../../../shared/JWT/AuthJWT';
export class AuthServiceImpl extends AuthService {
    async login(userRequest) {
        const [rows] = await db.query('SELECT id_usuario, nombre, apellido, email, password, rol FROM usuarios WHERE email = ? AND activo = TRUE LIMIT 1', [userRequest.email.trim().toLowerCase()]);
        const user = rows[0];
        if (!user || typeof user.password !== 'string') {
            return undefined;
        }
        const passwordMatches = await bcrypt.compare(userRequest.password, user.password);
        if (!passwordMatches) {
            return undefined;
        }
        const role = user.rol === 'admin' ? 'admin' : 'usuario';
        const accessToken = generarToken({
            id: user.id_usuario,
            email: user.email,
            rol: role,
            type: 'access',
        });
        const refreshToken = generarToken({
            id: user.id_usuario,
            email: user.email,
            rol: role,
            type: 'refresh',
        }, process.env.JWT_REFRESH_EXPIRES_IN ?? '7d');
        await db.execute(`INSERT INTO refresh_tokens (id_usuario, token_hash, expires_at)
       VALUES (?, ?, ?)`, [
            user.id_usuario,
            createHash('sha256').update(refreshToken).digest('hex'),
            obtenerExpiracionToken(refreshToken),
        ]);
        return new RespuestaLoginDto(user.id_usuario, user.nombre, user.apellido, user.email, role, accessToken, refreshToken);
    }
    async logout(userRequest) {
        if (userRequest.refreshToken) {
            await db.execute('UPDATE refresh_tokens SET revoked_at = NOW() WHERE token_hash = ? AND revoked_at IS NULL', [createHash('sha256').update(userRequest.refreshToken).digest('hex')]);
        }
        return undefined;
    }
    async refresh(refreshToken) {
        const payload = validarToken(refreshToken, 'refresh');
        if (!payload) {
            return undefined;
        }
        const [rows] = await db.query(`SELECT u.id_usuario, u.nombre, u.apellido, u.email, u.rol
       FROM usuarios u
       INNER JOIN refresh_tokens rt ON rt.id_usuario = u.id_usuario
       WHERE rt.token_hash = ? AND rt.revoked_at IS NULL AND rt.expires_at > NOW()
         AND u.activo = TRUE LIMIT 1`, [createHash('sha256').update(refreshToken).digest('hex')]);
        const user = rows[0];
        if (!user || user.id_usuario !== payload.id) {
            return undefined;
        }
        await db.execute('UPDATE refresh_tokens SET revoked_at = NOW() WHERE token_hash = ?', [createHash('sha256').update(refreshToken).digest('hex')]);
        const role = user.rol === 'admin' ? 'admin' : 'usuario';
        const accessToken = generarToken({
            id: user.id_usuario, email: user.email, rol: role, type: 'access',
        });
        const rotatedRefreshToken = generarToken({
            id: user.id_usuario, email: user.email, rol: role, type: 'refresh',
        }, process.env.JWT_REFRESH_EXPIRES_IN ?? '7d');
        await db.execute(`INSERT INTO refresh_tokens (id_usuario, token_hash, expires_at)
       VALUES (?, ?, ?)`, [
            user.id_usuario,
            createHash('sha256').update(rotatedRefreshToken).digest('hex'),
            obtenerExpiracionToken(rotatedRefreshToken),
        ]);
        return new RespuestaLoginDto(user.id_usuario, user.nombre, user.apellido, user.email, role, accessToken, rotatedRefreshToken);
    }
}
export default AuthServiceImpl;
//# sourceMappingURL=Auth.Service.Impl.js.map