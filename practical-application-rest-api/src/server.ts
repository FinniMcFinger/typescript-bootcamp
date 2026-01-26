import * as dotenv from "dotenv";

const result = dotenv.config();

if (result.error) {
    console.log(`Error loading environment variables.`, result.error);
    process.exit(1);
}

import "reflect-metadata"
import * as express from "express";
import {root} from "./routes/root";
import {isInteger} from "./utils";
import {logger} from "./logger";
import {AppDataSource} from "./datasource";
import { getAllCourses } from "./routes/get-all-courses";
import { defaultErrorHandler } from "./middlewares/default-error-handler";
import {findCourseByUrl} from "./routes/find-course-by-url";
import {findLessonsForCourse} from "./routes/find-lessons-for-course";
import {updateCourse} from "./routes/update-course";
import cors = require("cors");
import bodyParser = require("body-parser");
import {createCourse} from "./routes/create-course";
import {deleteCourse} from "./routes/delete-course";
import {createUser} from "./routes/create-user";
import {login} from "./routes/login";
import {checkIfAuthenticated} from "./middlewares/authentication";
import {checkIfAdmin} from "./middlewares/admin-only";

const app = express();

function setUpExpress() {
    app.use(cors({ origin: true }));
    // harvests JSON from request bodies
    app.use(bodyParser.json());
    app.route("/").get(root);
    app.route("/api/courses").post(checkIfAuthenticated, createCourse);
    app.route("/api/users").post(checkIfAuthenticated, checkIfAdmin, createUser);
    app.route("/api/login").post(login);
    app.route("/api/courses").get(checkIfAuthenticated, getAllCourses);
    app.route("/api/courses/:courseUrl").get(checkIfAuthenticated, findCourseByUrl);
    app.route("/api/courses/:courseId/lessons").get(checkIfAuthenticated, findLessonsForCourse);
    app.route("/api/courses/:courseId").patch(checkIfAuthenticated, updateCourse);
    app.route("/api/courses/:courseId").delete(checkIfAuthenticated, deleteCourse);
    // default error handler should normally be last
    app.use(defaultErrorHandler);
}

function startServer() {
    let port: number;
    const portEnv = process.env.PORT;
    const portArg = process.argv[2];

    // prefers .env over command line arg
    if (isInteger(portEnv)) {
        port = parseInt(portEnv);
    } else if (isInteger(portArg)) {
        port = parseInt(portArg);
    } else {
        port = 9000;
    }

    app.listen(port, () => {
        logger.info(`server started at http://localhost:${port}`);
    });
}

AppDataSource.initialize()
    .then(() => {
        logger.info(`datasource initialized`);
        setUpExpress();
        startServer();
    })
    .catch(err => {
        logger.error(`error initializing datasource`, err);
        process.exit(1);
    });
