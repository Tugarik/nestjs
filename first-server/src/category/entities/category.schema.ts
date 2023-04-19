import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Category {
  @Prop({ required: true, max: 20 })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
