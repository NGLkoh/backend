import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Template } from './schema/template.schema';
import { TemplateResquestDto } from './request/template-request.dto';
import { TemplateSearchResquestDto } from './request/template-search-request.dto';

@Injectable()
export class TemplateService {
  constructor(@InjectModel(Template.name) private templateModel: Model<Template>) {}

  async create(templateResquestDto: TemplateResquestDto): Promise<any> {
	try {
       const createTemplate = new this.templateModel(templateResquestDto);
	   const result : any =  await createTemplate.save()
	    return  { status: 200, message: 'true', result : result};
     } catch (e) {
         return  { status: 200, message: 'false', result : []};
     }
   }

	async search(templateSearchResquestDto: TemplateSearchResquestDto): Promise<any> {
		const result: any =  await this.templateModel.find({ 'ids': templateSearchResquestDto.ids}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

}
