

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
    @Prop()
	ids: string

	@Prop()
	message: string

	@Prop()
	date: string
}

export const CommentSchema = SchemaFactory.createForClass(Comment);