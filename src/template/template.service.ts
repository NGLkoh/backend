import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Template } from './schema/template.schema';
import { TemplateResquestDto } from './request/template-request.dto';
import { TemplateSearchResquestDto } from './request/template-search-request.dto';
import { TemplateUpdateCategoryResquestDto } from './request/template-update-category-request.dto';
import { TemplateDataResquestDto } from './request/template-update-data-request.dto';
import { TemplateDeleteResquestDto } from './request/template-delete-template-request.dto';

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

	async searchAll(): Promise<any> {
		const result: any =  await this.templateModel.find().exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}



	async template(templateSearchResquestDto: TemplateSearchResquestDto): Promise<any> {
		const result: any =  await this.templateModel.find({ '_id': templateSearchResquestDto.ids}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}


    async all(): Promise<any> {
		const result: any =  await this.templateModel.find().exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	} 

    async UpdateCategorytemplate(templateUpdateCategoryResquestDto: TemplateUpdateCategoryResquestDto): Promise<any> {

       let newId = new Types.ObjectId(templateUpdateCategoryResquestDto.id)
		const result: any =  await this.templateModel.updateOne( { _id: newId }, [{ $set: { category_id: templateUpdateCategoryResquestDto.category_id } }],{ upsert: true }).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

    async deleteTemplate(templateDeleteResquestDto: TemplateDeleteResquestDto): Promise<any> {

       let newId = new Types.ObjectId(templateDeleteResquestDto.id)
		const result: any =  await this.templateModel.deleteOne({ '_id': newId}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

 
  async UpdateDatatemplate(templateDataResquestDto: TemplateDataResquestDto): Promise<any> {
    console.log(templateDataResquestDto)
     let newId = new Types.ObjectId(templateDataResquestDto.id)
        let result :any
        if(templateDataResquestDto.type == 1 ) {
          result =  await this.templateModel.updateOne( { _id: newId }, [{ $set: { data: templateDataResquestDto.data } }],{ upsert: true }).exec() 
        } else {
          result =  await this.templateModel.updateOne( { _id: newId }, [{ $set:  templateDataResquestDto.data  }],{ upsert: true }).exec()
       }
       return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};

	}
}
