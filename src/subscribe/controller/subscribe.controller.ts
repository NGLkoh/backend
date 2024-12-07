import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SubscribeResponseDto } from '../dto/subscribe.dto';
import { CategoryService } from '../subscribe.service';
import { SubscribeResquestDto } from '../request/subscribe-request.dto';
import { SubscribeSearchResquestDto } from '../request/subscribe-search-request.dto';
import { CategoryUpdateResquestDto } from '../request/subscribe-update-request.dto';
import { CategoryDeleteResquestDto } from '../request/subscribe-delete.dto';

@Controller('subscribe')
@ApiTags('Subscribe')
export class CategoryController {
  private readonly logger = new Logger(CategoryController.name)
  constructor(private categoryService: CategoryService) {
}
	@Post('create')
	@ApiOperation({ summary: `create Subscribe`})
	@ApiResponse({status:200, type: SubscribeResponseDto})
	public async proccessCreateTemplate(@Body() subscribeResquestDto: SubscribeResquestDto) {
	return await this.categoryService.create(subscribeResquestDto)
    }

    @Post('remove')
	@ApiOperation({ summary: `delete users`})
	@ApiResponse({status:200, type: SubscribeResponseDto})
	public async proccessDeleteUserSub(@Body() categoryDeleteResquestDto: CategoryDeleteResquestDto) {
	return await this.categoryService.deleteCat(categoryDeleteResquestDto)
   }
	@Post('search')
	@ApiOperation({ summary: `search Category By Ids`})
	@ApiResponse({status:200, type: SubscribeResponseDto})
	public async proccessSearchCategory(@Body() categorySearchResquestDto: SubscribeSearchResquestDto) {
	return await this.categoryService.search(categorySearchResquestDto)
    }
	
	@Post('searchById')
	@ApiOperation({ summary: `search Category By Id`})
	@ApiResponse({status:200, type: SubscribeResponseDto})
	public async proccessSearchCategoryById(@Body() subscribeSearchResquestDto: SubscribeSearchResquestDto) {
	return await this.categoryService.searchById(subscribeSearchResquestDto)
    }

   	@Post('updateById')
	@ApiOperation({ summary: `Update Category By Id`})
	@ApiResponse({status:200, type: SubscribeResponseDto})
	public async proccessUpdateCategoryById(@Body() categoryUpdateResquestDto: CategoryUpdateResquestDto) {
	return await this.categoryService.updateById(categoryUpdateResquestDto)
    }

    @Post('all')
	@ApiOperation({ summary: `all`})
	@ApiResponse({status:200, type: SubscribeResponseDto})
	public async proccessAll() {
	return await this.categoryService.all()
    }
}