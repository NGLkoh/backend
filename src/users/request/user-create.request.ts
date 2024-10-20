import { ApiProperty } from "@nestjs/swagger";

export class UserCreateResquestDto {
	@ApiProperty()
	username: string

    @ApiProperty()
	lastName: string

	@ApiProperty()
	firstName: string

    @ApiProperty()
	password: string

    @ApiProperty()
	email: string

	@ApiProperty()
	code: Number

	@ApiProperty()
	userType: String
}