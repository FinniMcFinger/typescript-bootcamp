import * as dotenv from "dotenv";

const result = dotenv.config();

if (result.error) {
    console.log(`Error loading environment variables.`, result.error);
    process.exit(1);
}

import "reflect-metadata"
import { AppDataSource } from "../datasource";
import { Lesson } from "./lesson";
import { Course } from "./course";
import {User} from "./user";

async function deleteDb() {
    await AppDataSource.initialize();
    console.log("database connection ready");
    console.log("deleting lessons");
    await AppDataSource.createQueryBuilder().delete().from(Lesson).execute();
    console.log("deleting courses");
    await AppDataSource.createQueryBuilder().delete().from(Course).execute();
    console.log("deleting courses");
    await AppDataSource.createQueryBuilder().delete().from(User).execute();
}

deleteDb()
    .then(() => {
        console.log(`finished deleting database`)
        process.exit(0);
    })
    .catch(err => {
        console.error(`error deleting database`, err);
        process.exit(1);
    });
