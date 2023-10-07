import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestLoggingInterceptor } from './winston/request-logging.interceptor';

@Controller()
@UseInterceptors(RequestLoggingInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  getMsg():string{
    return this.appService.getMsg();
  }
}
