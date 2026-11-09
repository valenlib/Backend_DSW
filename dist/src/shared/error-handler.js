export class HttpError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = "HttpError";
    }
}
const errorHandler = (error, req, res, next) => {
    const requestError = error;
    const statusCode = getStatusCode(requestError);
    console.error("Request error", {
        method: req.method,
        path: req.originalUrl,
        statusCode,
        errorCode: requestError.code,
        error: getErrorMessage(error),
    });
    if (res.headersSent) {
        next(error);
        return;
    }
    res.status(statusCode).send({
        message: getPublicMessage(error, statusCode),
    });
};
function getStatusCode(error) {
    if (error.type === "entity.parse.failed") {
        return 400;
    }
    if (error.code === "ER_DUP_ENTRY") {
        return 409;
    }
    if (error.code === "ER_NO_REFERENCED_ROW_2") {
        return 400;
    }
    if (error.code === "ER_ROW_IS_REFERENCED_2") {
        return 409;
    }
    const statusCode = error.statusCode ?? error.status ?? 500;
    return statusCode >= 400 && statusCode < 600 ? statusCode : 500;
}
function getPublicMessage(error, statusCode) {
    const requestError = error;
    if (requestError.type === "entity.parse.failed") {
        return "El cuerpo de la solicitud contiene JSON inválido";
    }
    const databaseMessage = {
        ER_DUP_ENTRY: "Ya existe un registro con esos datos",
        ER_NO_REFERENCED_ROW_2: "No se puede completar la operación porque el recurso relacionado no existe",
        ER_ROW_IS_REFERENCED_2: "No se puede eliminar el recurso porque está siendo utilizado",
        ER_BAD_NULL_ERROR: "Falta completar un campo obligatorio",
        ER_DATA_TOO_LONG: "Uno de los datos enviados supera la longitud permitida",
        ER_TRUNCATED_WRONG_VALUE: "Uno de los datos enviados tiene un formato inválido",
    };
    if (requestError.code && databaseMessage[requestError.code]) {
        return databaseMessage[requestError.code];
    }
    if (statusCode >= 500) {
        return "Ocurrió un error interno. Intente nuevamente más tarde";
    }
    return requestError.message || "La solicitud no pudo ser procesada";
}
function getErrorMessage(error) {
    return error instanceof Error ? error.message : String(error);
}
export function logUnexpectedError(type, error) {
    console.error(`Unexpected ${type}`, {
        error: getErrorMessage(error),
        stack: error instanceof Error ? error.stack : undefined,
    });
}
export default errorHandler;
//# sourceMappingURL=error-handler.js.map