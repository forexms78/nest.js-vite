import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): string {
    return '테스트야';
  }

  getCount(): string {
    return '123';
  }
}
