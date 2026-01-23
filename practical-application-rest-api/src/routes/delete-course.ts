import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../datasource";
import {Course} from "../models/course";
import {isInteger} from "../utils";

export async function deleteCourse(req: Request, res: Response, next: NextFunction) {
    try {
        logger.info(`delete course called`);
        const courseId = req.params.courseId as string;

        if (!isInteger(courseId)) {
            throw `Invalid course id ${courseId}`;
        }

        await AppDataSource.manager.transaction(
            async (entityManager) => {
                await entityManager.createQueryBuilder()
                    .delete()
                    .from("lesson")
                    .where("courseId = :courseId", {courseId})
                    .execute();
                await entityManager.createQueryBuilder()
                    .delete()
                    .from("course")
                    .where("id = :courseId", {courseId})
                    .execute();
            }
        );
        res.status(200).json({message: `deleted course ${courseId}`});
    } catch (error) {
        logger.error(`error deleting course: `, error);

        return next(error);
    }
}