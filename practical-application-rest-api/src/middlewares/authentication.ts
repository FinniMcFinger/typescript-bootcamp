import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

export async function checkIfAuthenticated(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
        logger.info(`request denied - JWT auth token missing`);
        res.sendStatus(403);

        return;
    }

    verifyAuthToken(token)
        .then(user => {
            logger.info(`JWT decoded for user: `, user);
            req["user"] = user;
            next();
        })
        .catch(error => {
            logger.error(`could not verify JWT, access denied`, error);
            res.sendStatus(403);
        });
}

async function verifyAuthToken(authToken: string) {
    const user = await jwt.verify(authToken, JWT_SECRET);
    logger.info(`found user details in JWT: `, user);

    return user;
}