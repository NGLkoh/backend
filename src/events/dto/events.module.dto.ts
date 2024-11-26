import { ApiProperty } from "@nestjs/swagger";

export class EventResponseDto {
	@ApiProperty()
	status: number

    @ApiProperty()
	data:  string
}