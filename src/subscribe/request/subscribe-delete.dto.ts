import { ApiProperty } from "@nestjs/swagger";

export class SubscribeDeleteResquestDto {
	@ApiProperty()
	ids: string
}