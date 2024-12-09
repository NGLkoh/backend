import { ApiProperty } from "@nestjs/swagger";

export class SubscribeSendMailResquestDto {
	@ApiProperty()
	email: string

    @ApiProperty()
	html: string
    
    @ApiProperty()
	subject: string
}