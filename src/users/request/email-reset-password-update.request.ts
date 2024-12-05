import { ApiProperty } from "@nestjs/swagger";

export class EmailResetUpdateResquestDto {
	@ApiProperty()
	token: string
    
    @ApiProperty()
	password: string
}