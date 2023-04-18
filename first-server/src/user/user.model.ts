import { Schema } from '@nestjs/mongoose';

@Schema()
export class IUser {
  name: string;
  age: number;
  phone?: number;
  email?: string;
}
