import { ApiProperty } from "@nestjs/swagger";

export class UserResquestIdsDto {
	@ApiProperty()
	ids: string
}