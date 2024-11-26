

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
	users: [object]

	@Prop()
	date: string
}

export const EventSchema = SchemaFactory.createForClass(Event);