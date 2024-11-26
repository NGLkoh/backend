import { ApiProperty } from "@nestjs/swagger";

export class EventResquestDto {
	@ApiProperty()
	ids: string

	@ApiProperty()
	title: string

    @ApiProperty()
	users: [object]

    @ApiProperty()
	date: string
}