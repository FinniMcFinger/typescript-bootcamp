import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../datasource";
import {User} from "../models/user";
import {hashPassword} from "../utils";
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        logger.debug(`login endpoint called`);
        const {email, password} = req.body;

        if (!email) {
            throw `email is required`;
        } else if (!password) {
            throw `password is required`;
        }

        const repo = AppDataSource.getRepository(User);
        const user = await repo.createQueryBuilder("user")
            .where("email = :email", {email})
            .getOne();

        if (!user) {
            const message = `Bad email or password`;
            logger.info(`${message} - ${email}`);
            res.status(403).json({message});

            return;
        }

        const passwordHash = await hashPassword(password, user.passwordSalt);

        if (passwordHash != user.passwordHash) {
            const message = `Bad email or password`;
            logger.info(`${message} - user with email ${email} has entered the wrong password`);
            res.status(403).json({message});

            return;
        }

        logger.info(`user ${email} has now logged in`);
        const {pictureUrl, isAdmin} = user;
        const jwtPayload = {
            userId: user.id,
            email,
            isAdmin
        };
        const authToken = await jwt.sign(jwtPayload, JWT_SECRET);
        res.status(200).json({
            user: {
                email,
                pictureUrl,
                isAdmin
            },
            authToken
        });
    } catch (error) {
        logger.error(`error attempting to login: `, error);

        return next(error);
    }
}