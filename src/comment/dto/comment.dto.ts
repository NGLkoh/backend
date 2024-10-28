import { ApiProperty } from "@nestjs/swagger";

export class CommentResponseDto {
	@ApiProperty()
	status: number

    @ApiProperty()
	data:  string
}