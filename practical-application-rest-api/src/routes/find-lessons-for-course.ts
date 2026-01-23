import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../datasource";
import {Course} from "../models/course";
import {Lesson} from "../models/lesson";
import {isInteger} from "../utils";

export async function findLessonsForCourse(request: Request, response: Response, next: NextFunction) {
    try {
        logger.debug(`find lessons for course called`);
        const courseId = request.params.courseId as string;
        const query = request.query as any;
        const page = query.page as string ?? process.env.LESSON_PAGE_DEFAULT;
        const count = query.count as string ?? process.env.LESSON_COUNT_DEFAULT;
        let requestMap = new Map<string, string>();
        requestMap.set("courseId", courseId);
        requestMap.set("page", page);
        requestMap.set("count", count);
        validate(requestMap);
        const lessons = await AppDataSource
            .getRepository(Lesson)
            .createQueryBuilder("lesson")
            .where("lesson.courseId = :courseId", {courseId})
            .orderBy("lesson.seqNum")
            .skip(parseInt(page) * parseInt(count))
            .take(parseInt(count))
            .getMany();
        response.status(200).json({lessons});

    } catch (error) {
        logger.error(`error finding lessons for course: `, error);

        return next(error);
    }
}

function validate(map: Map<string, string>) {
    if (!isInteger(map.get("courseId"))) {
        throw `invalid course id ${map.get("courseId")}`;
    }

    if (!isInteger(map.get("page"))) {
        throw `invalid page ${map.get("page")}`;
    }

    if (!isInteger(map.get("count"))) {
        throw `invalid count ${map.get("count")}`;
    }

}
