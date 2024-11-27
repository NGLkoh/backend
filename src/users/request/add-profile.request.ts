import { ApiProperty } from "@nestjs/swagger";

export class AddProfileResquestByIdDto {
    @ApiProperty()
	id: string

	@ApiProperty()
	data: profile
   
}

interface  profile {
	file: string
    backgroundImage: string
	description : string
	facebook : string
	twitter : string
    instagram : string
	linkId : string
}