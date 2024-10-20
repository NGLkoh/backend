import { ApiProperty } from "@nestjs/swagger";

export class SearchResquestDto {
	@ApiProperty()
	username: string

    @ApiProperty()
	password: string
}