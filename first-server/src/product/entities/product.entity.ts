import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Category } from "src/category/entities/category.schema";

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Category" })
  category: Category;

  @Prop()
  price: number;

  @Prop()
  description: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
