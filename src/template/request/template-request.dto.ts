import { ApiProperty } from "@nestjs/swagger";

export class TemplateResquestDto {
	@ApiProperty()
	ids: string

	@ApiProperty()
	date: string

	@ApiProperty()
	title: string

	@ApiProperty()
	data: string
 
    @ApiProperty()
	fileName: string

	@ApiProperty()
	description: string
}