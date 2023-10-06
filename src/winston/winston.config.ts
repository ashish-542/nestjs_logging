import * as winston from "winston";
export const winstonConfig:winston.LoggerOptions={
    transports: [
        new winston.transports.File({ filename: 'src/logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'src/logs/combined.log' }),
      ]
}