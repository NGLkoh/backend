import { ApiProperty } from "@nestjs/swagger";

export class CategorySearchResquestDto {
	@ApiProperty()
	ids: string
}