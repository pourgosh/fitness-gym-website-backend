import express from "express";
import logger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

export const appConfig = (app) => {
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: "http://localhost:5173",
      optionsSuccessStatus: 200,
      methods: ["POST", "GET", "PUT", "DELETE"],
      credentials: true,
    })
  );
  // Handle preflight requests
  app.options(
    "*",
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(logger("dev"));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
