import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../datasource";
import {User} from "../models/user";
import crypto = require("crypto")
import {hashPassword} from "../utils";

export async function createUser(req: Request, res: Response, next: NextFunction) {
    try {
        logger.debug(`create user endpoint called`);
        const {email, pictureUrl, password, isAdmin} = req.body;

        if (!email) {
            throw `email is required`;
        } else if (!password) {
            throw `password is required`;
        }

        const repo = AppDataSource.getRepository(User);
        const existing = await repo.createQueryBuilder("user")
            .where("email = :email", {email})
            .getOne();

        if (existing) {
            const message = `A user with the email address ${email} already exists.`;
            logger.error(message);
            res.status(400).json({message});

            return;
        }

        const passwordSalt = crypto.randomBytes(64).toString("hex");
        const passwordHash = await hashPassword(password, passwordSalt);
        const newUser = repo.create({
            email,
            pictureUrl,
            isAdmin,
            passwordHash,
            passwordSalt
        });
        await AppDataSource.manager.save(newUser);
        logger.info(`new user created for email ${email}`);
        res.status(200).json({
            email,
            pictureUrl,
            isAdmin
        });
    } catch (error) {
        logger.error(`error creating user: `, error);

        return next(error);
    }
}