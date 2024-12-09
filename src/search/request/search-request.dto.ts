import { ApiProperty } from "@nestjs/swagger";

export class SearchDetailResquestDto {
	@ApiProperty()
	title: string

    @ApiProperty()
	details: string
    
    @ApiProperty()
	link: string
}