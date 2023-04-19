import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, max: 20 })
  firstName: string;

  @Prop({ required: true, max: 20 })
  lastName: string;

  @Prop({ required: true, max: 99_99_99_99 })
  phone: number;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
