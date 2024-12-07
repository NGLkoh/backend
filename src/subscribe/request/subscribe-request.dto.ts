import { ApiProperty } from "@nestjs/swagger";

export class SubscribeResquestDto {
	@ApiProperty()
	email: string

    @ApiProperty()
	date: string
}