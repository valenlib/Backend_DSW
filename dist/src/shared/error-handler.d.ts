import type { ErrorRequestHandler } from "express";
export declare class HttpError extends Error {
    readonly statusCode: number;
    constructor(message: string, statusCode: number);
}
declare const errorHandler: ErrorRequestHandler;
export declare function logUnexpectedError(type: string, error: unknown): void;
export default errorHandler;
//# sourceMappingURL=error-handler.d.ts.map