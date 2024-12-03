

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
    @Prop()
	ids: string

	@Prop()
	title: string

   	@Prop()
	description: string

	@Prop()
	users: [string]

	@Prop()
	date: string
     
    @Prop()
	fileName: string
}

export const EventSchema = SchemaFactory.createForClass(Event);