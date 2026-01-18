import {Request, Response} from "express";
import {logger} from "../logger";

export function root(request: Request, response: Response) {
    logger.debug("root called")
    response.status(200).send("<h1>Great success!</h1>");
}