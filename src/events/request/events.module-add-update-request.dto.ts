import { ApiProperty } from "@nestjs/swagger";

export class CategoryUpdateUserResquestDto {
	@ApiProperty()
	ids: string
   
    @ApiProperty()
	userId: string
}