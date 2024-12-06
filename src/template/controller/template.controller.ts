
import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TemplateService } from '../template.service';
import { TemplateResponseDto } from '../dto/template.dto';
import { TemplateResquestDto } from '../request/template-request.dto';
import { TemplateSearchResquestDto } from '../request/template-search-request.dto';
import { TemplateUpdateCategoryResquestDto } from '../request/template-update-category-request.dto';
import { TemplateDataResquestDto } from '../request/template-update-data-request.dto';
import { TemplateDeleteResquestDto } from '../request/template-delete-template-request.dto';

@Controller('template')
@ApiTags('Template')
export class TemplateController {
  private readonly logger = new Logger(TemplateController.name)
  constructor(private templateService: TemplateService) {
}

	@Post('create')
	@ApiOperation({ summary: `create Template`})
	@ApiResponse({status:200, type: TemplateResponseDto})
	public async proccessCreateTemplate(@Body() templateResquestDto: TemplateResquestDto) {
	return await this.templateService.create(templateResquestDto)
    }

    @Post('search')
	@ApiOperation({ summary: `create Template`})
	@ApiResponse({status:200, type: TemplateResponseDto})
	public async proccessSearchTemplate(@Body() templateSearchResquestDto: TemplateSearchResquestDto) {
	return await this.templateService.search(templateSearchResquestDto)
    }


    @Post('search-all')
	@ApiOperation({ summary: `create Template`})
	@ApiResponse({status:200, type: TemplateResponseDto})
	public async proccessAllTemplate() {
	return await this.templateService.searchAll()
    }

    @Post('search-template')
	@ApiOperation({ summary: `create Template`})
	@ApiResponse({status:200, type: TemplateResponseDto})
	public async proccessSearchTemplateSub(@Body() templateSearchResquestDto: TemplateSearchResquestDto) {
	return await this.templateService.template(templateSearchResquestDto)
    }

    @Post('update-catergory')
	@ApiOperation({ summary: `update category Template`})
	@ApiResponse({status:200, type: TemplateResponseDto})
	public async proccessUpdateCategoryTemplateSub(@Body() templateUpdateCategoryResquestDto: TemplateUpdateCategoryResquestDto) {
	return await this.templateService.UpdateCategorytemplate(templateUpdateCategoryResquestDto)
    }

    @Post('update-data')
	@ApiOperation({ summary: `update data Template`})
	@ApiResponse({status:200, type: TemplateResponseDto})
	public async proccessUpdateDataTemplateSub(@Body() templateDataResquestDto: TemplateDataResquestDto) {
	return await this.templateService.UpdateDatatemplate(templateDataResquestDto)
    }

    @Post('all')
	@ApiOperation({ summary: `all`})
	@ApiResponse({status:200, type: TemplateResponseDto})
	public async proccessSearchCategory() {
	return await this.templateService.all()
    }

     
    @Post('remove')
	@ApiOperation({ summary: `delete template`})
	@ApiResponse({status:200, type: TemplateResponseDto})
	public async proccessDeleteUserSub(@Body() templateDeleteResquestDto: TemplateDeleteResquestDto) {
	return await this.templateService.deleteTemplate(templateDeleteResquestDto)
   }
}