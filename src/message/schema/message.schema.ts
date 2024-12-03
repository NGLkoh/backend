

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {

	@Prop()
	convo: [object]

	@Prop()
	users: [string]
 
    @Prop() 
    createdBy: string

    @Prop() 
    dateCreated: string
}

export const MessageSchema = SchemaFactory.createForClass(Message);