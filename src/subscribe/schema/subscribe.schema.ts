

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Subscribe>;

@Schema()
export class Subscribe {
    @Prop()
	ids: string

	@Prop()
	title: string

	@Prop()
	date: string
}

export const SubscribeSchema = SchemaFactory.createForClass(Subscribe);