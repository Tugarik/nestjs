import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Get('getall')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('add')
  addUser() {
    return this.userService.addUser({
      name: 'user1',
      age: 15,
    });
  }

  @Get('all')
  getAll(): object {
    return this.userService.getAll();
  }
}
