import { ApiProperty } from "@nestjs/swagger";

export class TemplateDataResquestDto {
	@ApiProperty()
	id: string

	@ApiProperty()
	data: string

}