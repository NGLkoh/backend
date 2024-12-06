import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryResponseDto } from '../dto/catergory.dto';
import { CategoryService } from '../category.service';
import { CategoryResquestDto } from '../request/category-request.dto';
import { CategorySearchResquestDto } from '../request/category-search-request.dto';
import { CategoryUpdateResquestDto } from '../request/category-update-request.dto';
import { CategoryDeleteResquestDto } from '../request/category-delete.dto';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  private readonly logger = new Logger(CategoryController.name)
  constructor(private categoryService: CategoryService) {
}
	@Post('create')
	@ApiOperation({ summary: `create Category`})
	@ApiResponse({status:200, type: CategoryResponseDto})
	public async proccessCreateTemplate(@Body() categoryResquestDto: CategoryResquestDto) {
	return await this.categoryService.create(categoryResquestDto)
    }

    @Post('remove')
	@ApiOperation({ summary: `delete users`})
	@ApiResponse({status:200, type: CategoryResponseDto})
	public async proccessDeleteUserSub(@Body() categoryDeleteResquestDto: CategoryDeleteResquestDto) {
	return await this.categoryService.deleteCat(categoryDeleteResquestDto)
   }
	@Post('search')
	@ApiOperation({ summary: `search Category By Ids`})
	@ApiResponse({status:200, type: CategoryResponseDto})
	public async proccessSearchCategory(@Body() categorySearchResquestDto: CategorySearchResquestDto) {
	return await this.categoryService.search(categorySearchResquestDto)
    }
	
	@Post('searchById')
	@ApiOperation({ summary: `search Category By Id`})
	@ApiResponse({status:200, type: CategoryResponseDto})
	public async proccessSearchCategoryById(@Body() categorySearchResquestDto: CategorySearchResquestDto) {
	return await this.categoryService.searchById(categorySearchResquestDto)
    }

   	@Post('updateById')
	@ApiOperation({ summary: `Update Category By Id`})
	@ApiResponse({status:200, type: CategoryResponseDto})
	public async proccessUpdateCategoryById(@Body() categoryUpdateResquestDto: CategoryUpdateResquestDto) {
	return await this.categoryService.updateById(categoryUpdateResquestDto)
    }

    @Post('all')
	@ApiOperation({ summary: `all`})
	@ApiResponse({status:200, type: CategoryResponseDto})
	public async proccessAll() {
	return await this.categoryService.all()
    }
}