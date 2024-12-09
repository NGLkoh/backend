import { ApiProperty } from "@nestjs/swagger";

export class SubscribeResponseDto {
	@ApiProperty()
	status: number

    @ApiProperty()
	data:  string
}