import express from "express";
import { config } from "dotenv";
import { appConfig } from "./src/config";
import { setConnection } from "./src/DB";
import { errorHandler } from "./src/errors";

//setup app with express
const app = express();

appConfig(app);
config();

setConnection();
errorHandler(app);
export default app;
