import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SubscribeResponseDto } from '../dto/subscribe.dto';
import { SubscribeService } from '../subscribe.service';
import { SubscribeResquestDto } from '../request/subscribe-request.dto';
import { SubscribeSearchResquestDto } from '../request/subscribe-search-request.dto';
import { CategoryUpdateResquestDto } from '../request/subscribe-update-request.dto';
import { SubscribeDeleteResquestDto } from '../request/subscribe-delete.dto';
import {SubscribeSendMailResquestDto} from '../request/subscribe-send-email-request.dto'
@Controller('subscribe')
@ApiTags('Subscribe')
export class SubscribeController {
  private readonly logger = new Logger(SubscribeController.name)
  constructor(private subscribeService: SubscribeService) {
}
	@Post('create')
	@ApiOperation({ summary: `create Subscribe`})
	@ApiResponse({status:200, type: SubscribeResponseDto})
	public async proccessCreateSubscribe(@Body() subscribeResquestDto: SubscribeResquestDto) {
	return await this.subscribeService.create(subscribeResquestDto)
    }

    @Post('remove')
	@ApiOperation({ summary: `delete subscribe`})
	@ApiResponse({status:200, type: SubscribeResponseDto})
	public async proccessDeleteUserSub(@Body() subscribeDeleteResquestDto: SubscribeDeleteResquestDto) {
	return await this.subscribeService.deleteSub(subscribeDeleteResquestDto)
   }
	@Post('searchByEmail')
	@ApiOperation({ summary: `search subscribe By email`})
	@ApiResponse({status:200, type: SubscribeResponseDto})
	public async proccessSearchCategory(@Body() subscribeSearchResquestDto: SubscribeSearchResquestDto) {
	return await this.subscribeService.searchByEmail(subscribeSearchResquestDto)
    }
	
	@Post('searchById')
	@ApiOperation({ summary: `search subscribe By Id`})
	@ApiResponse({status:200, type: SubscribeResponseDto})
	public async proccessSearchSubscribeById(@Body() subscribeSearchResquestDto: SubscribeSearchResquestDto) {
	return await this.subscribeService.searchById(subscribeSearchResquestDto)
    }

   	@Post('updateById')
	@ApiOperation({ summary: `Update Category By Id`})
	@ApiResponse({status:200, type: SubscribeResponseDto})
	public async proccessUpdateCategoryById(@Body() categoryUpdateResquestDto: CategoryUpdateResquestDto) {
	return await this.subscribeService.updateById(categoryUpdateResquestDto)
    }

    @Post('all')
	@ApiOperation({ summary: `all`})
	@ApiResponse({status:200, type: SubscribeResponseDto})
	public async proccessAll() {
	return await this.subscribeService.all()
    }

	@Post('sendMail')
	@ApiOperation({ summary: `Update Category By Id`})
	@ApiResponse({status:200, type: SubscribeResponseDto})
	public async proccessSendMail(@Body() subscribeSendMailResquestDto: SubscribeSendMailResquestDto) {
	return await this.subscribeService.sendMailBulk(subscribeSendMailResquestDto)
    }
}