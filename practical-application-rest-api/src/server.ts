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

const app = express();

function setUpExpress() {
    app.route("/").get(root);
    app.route("/api/courses").get(getAllCourses);
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
