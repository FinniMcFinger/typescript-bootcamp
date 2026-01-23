import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../datasource";
import {Course} from "../models/course";
import {Lesson} from "../models/lesson";

export async function findCourseByUrl(request: Request, response: Response, next: NextFunction) {
    try {
        logger.debug(`findCourseByUrl called`)
        const courseUrl = request.params.courseUrl as string;

        if (!courseUrl) {
            throw `Could not extract course URL from request.`;
        }

        const course = await AppDataSource.getRepository(Course)
            .findOneBy({
                url: courseUrl
            });

        if (!course) {
            const message = `could not find course with url ${courseUrl}`;
            logger.error(message);
            response.status(404).json({message});

            return;
        }

        const lessonCount = await AppDataSource.getRepository(Lesson)
            .createQueryBuilder("lesson")
            .where("lesson.courseId = :courseId", {
                courseId: course.id
            })
            .getCount();
        response.status(200).json({course, lessonCount});
    } catch (error) {
        logger.error(`error finding course by url - `, error);
        next(error);
    }
}