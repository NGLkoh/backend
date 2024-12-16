import { ApiProperty } from "@nestjs/swagger";

export class UserResquestCheckerByEmailDto {
	@ApiProperty()
	email: string
}