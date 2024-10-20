import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryResponseDto } from '../dto/catergory.dto';
import { CategoryService } from '../category.service';
import { CategoryResquestDto } from '../request/category-request.dto';
import { CategorySearchResquestDto } from '../request/category-search-request.dto';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  private readonly logger = new Logger(CategoryController.name)
  constructor(private categoryService: CategoryService) {
}
	@Post('create')
	@ApiOperation({ summary: `create Template`})
	@ApiResponse({status:200, type: CategoryResponseDto})
	public async proccessCreateTemplate(@Body() categoryResquestDto: CategoryResquestDto) {
	return await this.categoryService.create(categoryResquestDto)
    }

	@Post('search')
	@ApiOperation({ summary: `create Template`})
	@ApiResponse({status:200, type: CategoryResponseDto})
	public async proccessSearchTemplate(@Body() categorySearchResquestDto: CategorySearchResquestDto) {
	return await this.categoryService.search(categorySearchResquestDto)
    }
	
}