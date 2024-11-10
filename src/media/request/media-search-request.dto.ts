import { ApiProperty } from "@nestjs/swagger";

export class MediaSearchResquestDto {
	@ApiProperty()
	ids: string
}