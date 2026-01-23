import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import { AppDataSource } from "../datasource";
import { Course } from "../models/course";

export async function getAllCourses(request: Request, response: Response, next: NextFunction) {
    logger.debug("getAllCourses called");

    try {
        const courses = await AppDataSource
            .getRepository(Course)
            .createQueryBuilder("course")
            .orderBy("course.seqNum")
            .getMany();

        response.status(200).json({courses: courses});
    } catch (error) {
        logger.error(`Error calling getAllCourses()`, error);
        
        return next(error);
    }
}