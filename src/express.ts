import * as bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";

export const app = express();

app.use(bodyParser.json(), cookieParser());

app.get("/test", (_, res) => res.json(process.env));
