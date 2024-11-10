

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MediaDocument = HydratedDocument<Comment>;

@Schema()
export class Media {
    @Prop()
	ids: string

	@Prop()
	key: string

	@Prop()
	date: string
}

export const MediaSchema = SchemaFactory.createForClass(Media);