import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject("winston") private readonly logger:Logger
  ){}
  getHello(): string {
    this.logger.error("this is log 2");
    return 'Hello World!';
  }
  getMsg():string{
    return 'Message from post request';
  }
}
