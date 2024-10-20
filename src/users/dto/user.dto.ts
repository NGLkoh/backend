import { ApiProperty } from "@nestjs/swagger";

export class UserResponseDto {
	@ApiProperty()
	status: number

    @ApiProperty()
	message: string

	@ApiProperty()
	result: UsersEntity[]
}

export class UsersEntity{
	username: string
	password: string
	constructor(username: string, password: string){
 	 this.username = username
     this.password = password
  }
}