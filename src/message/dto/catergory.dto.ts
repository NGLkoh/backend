import { ApiProperty } from "@nestjs/swagger";

export class MessageResponseDto {
	@ApiProperty()
	status: number

    @ApiProperty()
	data:  string
}