import type { ErrorRequestHandler } from 'express';

export class HttpError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const httpError = error as Error & {
    statusCode?: number;
    status?: number;
  };
  const statusCode = httpError.statusCode ?? httpError.status ?? 500;
  const safeStatusCode =
    statusCode >= 400 && statusCode < 600 ? statusCode : 500;

  console.error('Request failed', {
    method: req.method,
    path: req.originalUrl,
    error,
  });

  if (res.headersSent) {
    next(error);
    return;
  }

  const message =
      safeStatusCode === 500
        ? 'Internal server error'
        : httpError.message || 'Request failed';

  res.status(safeStatusCode).json({ message });
};

export default errorHandler;
