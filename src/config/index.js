import express from "express";
import logger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

export const appConfig = (app) => {
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: "*",
      optionsSuccessStatus: 200,
    })
  );
  app.use(express.json());
  app.use(logger("dev"));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
