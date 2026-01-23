import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../datasource";
import {Course} from "../models/course";

export async function createCourse(req: Request, res: Response, next: NextFunction) {
    try {
        logger.info(`create course called`);
        const data = req.body;

        if (!data) {
            throw `cannot create course without data`;
        }

        let newCourse = await AppDataSource.manager.transaction(
            "REPEATABLE READ",
            async (entityManager) => {
                const repo = entityManager.getRepository(Course);
                const result = await repo
                    .createQueryBuilder("course")
                    .select("MAX(course.seqNum)", "max")
                    .getRawOne();
                const newCourse = repo
                    .create({
                        ...data,
                        seqNum: ( result?.max ?? 0 ) + 1,
                    });
                await repo.save(newCourse);

                return newCourse;
            }
        );
        res.status(201).json(newCourse);
    } catch (error) {
        logger.error(`error creating course: `, error);

        return next(error);
    }
}