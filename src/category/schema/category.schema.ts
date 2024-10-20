

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
    @Prop()
	ids: string

	@Prop()
	title: string

	@Prop()
	date: string
}

export const CategorySchema = SchemaFactory.createForClass(Category);