

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
	fileName: string

	@Prop()
	description: string

	@Prop()
	sub?: boolean

    @Prop()
	idSub?: string

    @Prop()
	likes?: number
    
    @Prop()
	ip?: [string]

    @Prop()
	comment?: [object]
}

export const TemplateSchema = SchemaFactory.createForClass(Template);