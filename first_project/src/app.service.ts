import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('서비스');
    return 'Hello World!';
  }
}
