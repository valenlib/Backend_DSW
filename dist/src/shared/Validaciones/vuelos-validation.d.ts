import type { NextFunction, Request, Response } from "express";
export declare const estadosVuelo: readonly ["en hora", "cancelado", "demorado"];
export declare function validateVueloCreate(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function validateVueloUpdate(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function validateAeropuertoBody(req: Request, res: Response, next: NextFunction): void;
export declare function validateAeropuertoUpdate(req: Request, res: Response, next: NextFunction): void;
//# sourceMappingURL=vuelos-validation.d.ts.map