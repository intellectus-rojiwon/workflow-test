import sls from "@codegenie/serverless-express";
import { Handler } from "aws-lambda";
import { app } from "./express";

export const handler: Handler = sls({ app })