import { ApiProperty } from "@nestjs/swagger";

export class CategoryResponseDto {
	@ApiProperty()
	status: number

    @ApiProperty()
	data:  string
}