import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): string {
    return this.appService.getTest();
  }

  @Get('count')
  getCount(): string {
    return this.appService.getCount();
  }

  @Get('users')
  async getUsers(): Promise<User[]> {
    return this.appService.getUsers();
  }

  @Post('users')
  async createUser(@Body() body: { name: string }): Promise<User> {
    return this.appService.createUser(body.name);
  }
}
