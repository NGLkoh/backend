import { ApiProperty } from "@nestjs/swagger";

export class CommentSearchResquestDto {
	@ApiProperty()
	ids: string
}