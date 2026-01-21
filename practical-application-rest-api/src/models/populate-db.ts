import * as dotenv from "dotenv";

const result = dotenv.config();

if (result.error) {
    console.log(`Error loading environment variables.`, result.error);
    process.exit(1);
}

import "reflect-metadata"
import {COURSES} from "./db-data"
import {AppDataSource} from "../datasource";
import {DeepPartial} from "typeorm";
import {Course} from "./course";
import {Lesson} from "./lesson";

async function populateDb() {
    await AppDataSource.initialize();
    console.log("db connection ready");
    const courses = Object.values(COURSES) as DeepPartial<Course>[];
    const courseRepo = AppDataSource.getRepository(Course);
    const lessonRepo = AppDataSource.getRepository(Lesson);

    for (let courseData of courses) {
        console.log(`inserting course ${courseData.seqNum}`);
        const course = courseRepo.create(courseData);
        await courseRepo.save(course);

        for (let lessonData of courseData.lessons) {
            console.log(`inserting lesson ${lessonData.title}`);
            const lesson = lessonRepo.create(lessonData);
            lesson.course = course;
            await lessonRepo.save(lesson);
        }
    }

    const totalCourses = await courseRepo
        .createQueryBuilder()
        .getCount();
    const totalLessons = await lessonRepo
        .createQueryBuilder()
        .getCount();
    console.log(`data population complete! ${totalCourses} total courses and ${totalLessons} total lessons`);
}

populateDb()
    .then(() => {
        console.log(`finished populating database`)
        process.exit(0);
    })
    .catch(err => {
        console.error(`error populating database`, err);
        process.exit(1);
    });
