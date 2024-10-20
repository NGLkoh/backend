import { ApiProperty } from "@nestjs/swagger";

export class TemplateResponseDto {
	@ApiProperty()
	status: number

    @ApiProperty()
	data:  string
}