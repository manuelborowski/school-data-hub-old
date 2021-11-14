import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file'
import config from "../../config.json";

class Logger {
  private static instance: Logger;
  logger!: winston.Logger;
  constructor() {
    if (!Logger.instance) {
      Logger.instance = this;

      this.logger = winston.createLogger({
        level: 'info',
        format: winston.format.combine(
          winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
          winston.format.json(),
        ),
        transports: [
          new DailyRotateFile({
            filename: `${config.project_prefix}-%DATE%.log`,
            dirname: 'log',
            maxSize: '100k',
            maxFiles: '40'
          }),
        ]
      });
    }
    return Logger.instance;
  }
}

const log_class = new Logger();
export default log_class.logger;