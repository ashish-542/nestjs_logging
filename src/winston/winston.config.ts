import winston, { format } from 'winston';
import { transports } from 'winston';
import { MongoDB } from 'winston-mongodb';

// Define your custom log format
const customLogFormat = format.printf(({ timestamp, level, message, meta }) => {
  return `${timestamp} [${level}] - ${message} ${meta ? JSON.stringify(meta) : ''}`;
});

export const winstonConfig: winston.LoggerOptions = {
  format: format.combine(
    format.timestamp(),
    customLogFormat // Include the custom log format
  ),
  transports: [
    new MongoDB({
      db: 'mongodb://localhost:27017/logDB',
      level: 'info',
      collection: 'logs',
      options: {
        useUnifiedTopology: true,
        family: 4,
      },
    }),
  ],
};
