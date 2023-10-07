import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject("winston") private readonly logger:Logger
  ){}
  getHello(): string {
    // this.logger.error("this is error level");
    // this.logger.warn("this is warn level");
    // this.logger.debug("this is debug level");
    // this.logger.verbose("this is verbose level");
    return 'Hello World!';
  }
  getMsg():string{
    return 'Message from post request';
  }
}
