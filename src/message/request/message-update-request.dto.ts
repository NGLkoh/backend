import { ApiProperty } from "@nestjs/swagger";

export class MessageUpdateResquestDto {
	@ApiProperty()
	messageId: string

 	@ApiProperty()
	userId: string

    @ApiProperty()
	message: string
    
}