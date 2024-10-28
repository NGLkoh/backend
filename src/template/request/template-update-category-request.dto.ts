import { ApiProperty } from "@nestjs/swagger";

export class TemplateUpdateCategoryResquestDto {
	@ApiProperty()
	id: string

    @ApiProperty()
    category_id: string
}