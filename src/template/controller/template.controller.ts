
import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TemplateService } from '../template.service';
import { TemplateResponseDto } from '../dto/template.dto';
import { TemplateResquestDto } from '../request/template-request.dto';
import { TemplateSearchResquestDto } from '../request/template-search-request.dto';

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
}