import winston from "winston";
import { transports } from "winston";
import {MongoDB} from "winston-mongodb";

export const winstonConfig: winston.LoggerOptions = {
  transports: [
    new MongoDB({
      db: "mongodb://localhost:27017/logDB",
      level: "info",
      collection: "logs",
      options: {
        useUnifiedTopology: true,
        family: 4,
      },
    }),
  ],
};
