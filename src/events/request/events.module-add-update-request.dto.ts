import { ApiProperty } from "@nestjs/swagger";
export class EventUpdateUserResquestDto {
	@ApiProperty()
	ids: string
   
    @ApiProperty()
	userId: string
}