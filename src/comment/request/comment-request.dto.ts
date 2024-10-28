import { ApiProperty } from "@nestjs/swagger";

export class CommentResquestDto {
	@ApiProperty()
	ids: string

	@ApiProperty()
	message: string

    @ApiProperty()
	date: string
}