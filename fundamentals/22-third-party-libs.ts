// compile error without configuring the `express` lib
// use `npm install express` to ensure the lib is installed
// use `npm install -D @types/express` to ensure its types are installed
import { Request, Response } from "express";

let req: Request;