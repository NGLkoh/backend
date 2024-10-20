

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TemplateDocument = HydratedDocument<Template>;

@Schema()
export class Template {
    @Prop()
	ids: string

	@Prop()
	title: string

	@Prop()
	date: string

	@Prop()
	data: string

	@Prop()
	sub?: boolean

    @Prop()
	idSub?: string
}

export const TemplateSchema = SchemaFactory.createForClass(Template);