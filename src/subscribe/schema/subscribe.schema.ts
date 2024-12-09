

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Subscribe>;

@Schema()
export class Subscribe {

	@Prop()
	email: string

	@Prop()
	date: string

    @Prop()
	sub: number
}

export const SubscribeSchema = SchemaFactory.createForClass(Subscribe);