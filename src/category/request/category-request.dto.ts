import { ApiProperty } from "@nestjs/swagger";

export class CategoryResquestDto {
	@ApiProperty()
	ids: string

	@ApiProperty()
	title: string

    @ApiProperty()
	date: string
}