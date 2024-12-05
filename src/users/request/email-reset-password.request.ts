import { ApiProperty } from "@nestjs/swagger";

export class EmailResetResquestDto {
	@ApiProperty()
	email: string
}