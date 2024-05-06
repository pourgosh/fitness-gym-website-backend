import express from "express";
import { config } from "dotenv";
import { appConfig } from "./src/config";
import { setConnection } from "./src/DB";
import { errorHandler } from "./src/errors";
import USER_ROUTES from "./src/routes/members.routes";

//setup app with express
const app = express();

appConfig(app);
config();
//setup routes
app.use("/", USER_ROUTES);
//setup connection
setConnection();
//errorHandling
errorHandler(app);
export default app;
