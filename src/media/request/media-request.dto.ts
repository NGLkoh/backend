import { ApiProperty } from "@nestjs/swagger";

export class MediaResquestDto {
	@ApiProperty()
	ids: string

	@ApiProperty()
	key: string

    @ApiProperty()
	date: string
}