import { ApiProperty } from "@nestjs/swagger";

export class EventResquestDto {
	@ApiProperty()
	ids: string

	@ApiProperty()
	title: string
  
    @ApiProperty()
	description: string

    @ApiProperty()
	users: [object]

    @ApiProperty()
	date: string
    
    @ApiProperty()
	fileName: string
}