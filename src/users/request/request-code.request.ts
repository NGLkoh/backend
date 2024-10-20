import { ApiProperty } from "@nestjs/swagger";

export class CodeResquestDto {
	@ApiProperty()
	code: Number
}