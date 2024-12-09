import { ApiProperty } from "@nestjs/swagger";

export class EventUpdateResquestDto {
	@ApiProperty()
	id: string

 	@ApiProperty()
	data: [object]
}