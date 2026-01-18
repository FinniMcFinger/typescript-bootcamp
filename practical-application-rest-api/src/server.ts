import * as dotenv from "dotenv";

const result = dotenv.config();

if (result.error) {
    console.log(`Error loading environment variables.`, result.error);
    process.exit(1);
}

import * as express from "express";
import {root} from "./routes/root";
import {isInteger} from "./utils";
import {logger} from "./logger";

const app = express();

function setUpExpress() {
    app.route("/").get(root);
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

setUpExpress();
startServer();
