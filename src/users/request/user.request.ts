import { ApiProperty } from "@nestjs/swagger";

export class UserResquestDto {
	@ApiProperty()
	username: string

    @ApiProperty()
	password: string

}