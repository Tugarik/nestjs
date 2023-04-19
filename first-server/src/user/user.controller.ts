import { Controller, Get, Post } from "@nestjs/common";
import { User } from "./user.schema";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Get("getall")
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get("addlocal")
  addUserLocal() {
    return this.userService.addUserLocal({
      name: "user1",
      age: 15,
    });
  }

  @Get("all")
  getAll(): object {
    return this.userService.getAll();
  }

  @Get("add")
  addUser(): string {
    return this.userService.addUser({
      firstName: "Davaa",
      lastName: "Baasan",
      phone: 44112233,
      email: "davaa@mail.com",
    });
  }
}
