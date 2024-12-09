import { ApiProperty } from "@nestjs/swagger";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";

export class SubscribeSendMailResquestDto {
	@ApiProperty()
	email: string

    @ApiProperty()
	html: string
    
    @ApiProperty()
	subject: string
}