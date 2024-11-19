import { ApiProperty } from "@nestjs/swagger";

export class MessageResquestDto {

    @ApiProperty()
	convo: [object]

	@ApiProperty()
	users: [object]

    @ApiProperty()
	createdBy:string
}
