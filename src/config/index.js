import express from "express";
import logger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

export const appConfig = (app) => {
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: "https://mutant-fitness.netlify.app",
      optionsSuccessStatus: 200,
      methods: ["POST", "GET", "PUT", "DELETE"],
      credentials: true,
    })
  );
  app.options("/product", (req, res) => {
    res.set({
      "Access-Control-Allow-Origin": "https://mutant-fitness.netlify.app",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Credentials": "true",
    });
    res.sendStatus(200);
  });
  app.use(express.json());
  app.use(logger("dev"));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
