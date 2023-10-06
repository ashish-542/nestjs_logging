import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logger:Logger;

  constructor(){
    this.logger=new Logger();
  }
  getHello(): string {
    this.logger.log("testing using logger log()");
    this.logger.error("testing using logger error()");
    this.logger.warn("testing using logger warn()");
    this.logger.debug("testing using logger debug()");
    this.logger.verbose("testing using logger verbose()");
    return 'Hello World!';
  }
  getMsg():string{
    return 'Message from post request';
  }
}
