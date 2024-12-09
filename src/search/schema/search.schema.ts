

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SearchDocument = HydratedDocument<Search>;

@Schema()
export class Search{

	@Prop()
	title: string

	@Prop()
	details: string

    @Prop()
	link: string

}

export const SearchDetailSchema = SchemaFactory.createForClass(Search);