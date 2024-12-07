import { ApiProperty } from "@nestjs/swagger";

export class SubscribeSearchResquestDto {
	@ApiProperty()
	ids: string
}