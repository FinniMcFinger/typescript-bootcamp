import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";

export function defaultErrorHandler(error, request: Request, response: Response, next: NextFunction) {
    logger.error(`Default error handler invoked; reason: `, error);

    // in case something else has already sent the response
    if (response.headersSent) {
        logger.error(`response already being written, delegating to express built-in handler`);

        return next(error);
    }

    return response.status(500).json({
        status: "error",
        message: "Check the logs."
    });
}