import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject("winston") private readonly logger:Logger
  ){}
  getHello(): string {
    this.logger.log("info","this is log 1");
    this.logger.error("this is log 2");
    return 'Hello World!';
  }
  getMsg():string{
    return 'Message from post request';
  }
}
