import { ApiProperty } from "@nestjs/swagger";

export class CategoryDeleteResquestDto {
	@ApiProperty()
	ids: string
}