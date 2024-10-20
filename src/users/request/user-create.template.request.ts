import { ApiProperty } from "@nestjs/swagger";

export class UserCreateTemplateResquestDto {
	@ApiProperty()
	id: string

    @ApiProperty()
	data: object
}