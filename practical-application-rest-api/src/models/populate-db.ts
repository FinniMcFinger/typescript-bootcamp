import * as dotenv from "dotenv";

const result = dotenv.config();

if (result.error) {
    console.log(`Error loading environment variables.`, result.error);
    process.exit(1);
}

import "reflect-metadata"
import {COURSES, USERS} from "./db-data"
import {AppDataSource} from "../datasource";
import {DeepPartial} from "typeorm";
import {Course} from "./course";
import {Lesson} from "./lesson";
import {User} from "./user";
import {hashPassword} from "../utils";

async function populateDb() {
    await AppDataSource.initialize();
    console.log("db connection ready");
    const courses = Object.values(COURSES) as DeepPartial<Course>[];
    const courseRepo = AppDataSource.getRepository(Course);
    const lessonRepo = AppDataSource.getRepository(Lesson);
    const userRepo = AppDataSource.getRepository(User);

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

    const users = Object.values(USERS) as any[];

    for (let userData of users) {
        console.log(`inserting user ${userData}`);
        const {email, pictureUrl, isAdmin, passwordSalt, plainTextPassword} = userData;
        const user = userRepo.create({
            email,
            pictureUrl,
            isAdmin,
            passwordSalt,
            passwordHash: await hashPassword(plainTextPassword, passwordSalt)
        });
        await AppDataSource.manager.save(user);
    }

    const totalCourses = await courseRepo
        .createQueryBuilder()
        .getCount();
    const totalLessons = await lessonRepo
        .createQueryBuilder()
        .getCount();
    const totalUsers = await userRepo
        .createQueryBuilder()
        .getCount();
    console.log(`data population complete! ${totalCourses} total courses with ${totalLessons} total lessons and `
        + `${totalUsers} total users`);
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
