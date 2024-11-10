import { ApiProperty } from "@nestjs/swagger";

export class VerifyUserResquestByIdDto {
	@ApiProperty()
	id: string
     
    @ApiProperty()
	value : string
}