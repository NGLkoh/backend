import { ApiProperty } from "@nestjs/swagger";

export class EmailResetUpdateResquestDto {
	@ApiProperty()
	username: string
    
    @ApiProperty()
	password: string
}