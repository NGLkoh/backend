import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MessageResponseDto } from '../dto/catergory.dto';
import { MessageService } from '../message.service';
import { MessageResquestDto } from '../request/message-request.dto';
import { MessageSearchResquestDto } from '../request/message-search-request.dto';
import { MessageUpdateResquestDto } from '../request/message-update-request.dto';

@Controller('message')
@ApiTags('Message')
export class MessageController {
  private readonly logger = new Logger(MessageController.name)
  constructor(private messageService: MessageService) {
}
	@Post('create')
	@ApiOperation({ summary: `create Message`})
	@ApiResponse({status:200, type: MessageResponseDto})
	public async proccessCreateTemplate(@Body() messageResquestDto: MessageResquestDto) {
	return await this.messageService.create(messageResquestDto)
    }

	@Post('search')
	@ApiOperation({ summary: `search message`})
	@ApiResponse({status:200, type: MessageResponseDto})
	public async proccessSearchCategory(@Body() messageSearchResquestDto: MessageSearchResquestDto) {
	return await this.messageService.search(messageSearchResquestDto)
    }

    @Post('checker')
	@ApiOperation({ summary: `search message`})
	@ApiResponse({status:200, type: MessageResponseDto})
	public async proccessSearchMessage(@Body() messageSearchResquestDto: MessageSearchResquestDto) {
	return await this.messageService.searchChecker(messageSearchResquestDto)
    }
	
   	@Post('update')
	@ApiOperation({ summary: `Update MEssage`})
	@ApiResponse({status:200, type: MessageResponseDto})
	public async proccessUpdateCategoryById(@Body() messageUpdateResquestDto: MessageUpdateResquestDto) {
	return await this.messageService.updateById(messageUpdateResquestDto)
    }
}