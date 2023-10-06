import * as winston from "winston";
export const winstonConfig:winston.LoggerOptions={
    transports: [
        new winston.transports.File({ filename: 'src/logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'src/logs/warning.log',level:'warning' }),
        new winston.transports.File({ filename: 'src/logs/debug.log',level:'debug' }),
        new winston.transports.File({ filename: 'src/logs/verbose.log',level:'verbose' }),
        new winston.transports.File({ filename: 'src/logs/combined.log',level:'log' }),
      ]
}