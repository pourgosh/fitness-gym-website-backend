import express from "express";
import { config } from "dotenv";
import { appConfig } from "./src/config/index.js";
import { setConnection } from "./src/DB/index.js";
import { errorHandler } from "./src/errors/index.js";
import USER_ROUTES from "./src/routes/members.routes.js";
import PRODUCT_ROUTE from "./src/routes/product.routes.js";

//setup app with express
const app = express();

appConfig(app);
config();
//setup routes
app.use("/", USER_ROUTES);
app.use("/", PRODUCT_ROUTE);
//setup connection
setConnection();
//errorHandling
errorHandler(app);
export default app;
