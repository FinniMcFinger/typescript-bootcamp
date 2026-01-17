import * as express from "express";
import {root} from "./routes/root";

const app = express();

function setUpExpress() {
    app.route("/").get(root);
}

function startServer() {
    app.listen(9000, () => {
        console.log("server started at http://localhost:9000.");
    });
}

setUpExpress();
startServer();
