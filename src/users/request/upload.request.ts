import { ApiProperty } from "@nestjs/swagger";

export class UploadResquestDto {
	@ApiProperty()
	base64: String
}