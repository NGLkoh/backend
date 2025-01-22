

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
	businessPermit: string

    @Prop()
    barangayClearance: string

	@Prop()
	userType: string

    @Prop()
	profileSet: number
 
    @Prop()
	profile: [object]

    @Prop()
	active: boolean
 
    @Prop()
	token: string

    @Prop()
	ids: string
    
    @Prop()
	dateCreated: string
}

export const UserSchema = SchemaFactory.createForClass(User);