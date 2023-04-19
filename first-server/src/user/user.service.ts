import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/user/user.schema";
import { IUser } from "./user.model";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  users = [];

  getHello(): string {
    return "Hello World! User!";
  }

  getAllUsers() {
    return this.users;
  }

  addUserLocal(user: IUser) {
    this.users.push(user);
    return "success";
  }

  getAll(): object {
    return this.userModel.find().exec();
  }
  addUser(user: User): string {
    const newUser = this.userModel.create(user);
    return "Added Success";
  }
}
