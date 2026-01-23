import {NextFunction,Request,Response} from "express";
import { logger } from "../logger";
import {isInteger} from "../utils";
import {AppDataSource} from "../datasource";
import {Course} from "../models/course";

export async function updateCourse(req: Request, res: Response, next: NextFunction) {
    try {
        logger.debug(`update course called`);
        const courseId = req.params.courseId as string;
        const changes = req.body;

        if (!isInteger(courseId)) {
            throw `Invalid course id ${courseId}`;
        }

        await AppDataSource
            .createQueryBuilder()
            .update(Course)
            .set(changes)
            .where("id = :courseId", {courseId})
            .execute();

        res.status(200).json({ message: `course ${courseId} updated successfully` });
    } catch (error) {
        logger.error(`error updating course: `, error);

        return next(error);
    }
}