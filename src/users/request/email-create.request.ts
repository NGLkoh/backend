import { ApiProperty } from "@nestjs/swagger";

export class EmailResquestDto {
	@ApiProperty()
	email: string

	@ApiProperty()
	code: string
}