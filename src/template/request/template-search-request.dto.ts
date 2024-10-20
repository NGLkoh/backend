import { ApiProperty } from "@nestjs/swagger";

export class TemplateSearchResquestDto {
	@ApiProperty()
	ids: string
}