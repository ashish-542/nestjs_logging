import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("testing get hello");
    return 'Hello World!';
  }
  getMsg():string{
    return 'Message from post request';
  }
}
