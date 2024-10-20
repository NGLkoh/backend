

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
	username: string

	@Prop()
	password: string

    @Prop()
	email: string

	@Prop()
	firstName: string

	@Prop()
	lastName: string

	@Prop()
	code: string

	@Prop()
	userType: string

    @Prop()
	ids: string
}

export const UserSchema = SchemaFactory.createForClass(User);