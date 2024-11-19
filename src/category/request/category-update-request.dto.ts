import { ApiProperty } from "@nestjs/swagger";

export class CategoryUpdateResquestDto {
	@ApiProperty()
	ids: string

 	@ApiProperty()
	title: string
}