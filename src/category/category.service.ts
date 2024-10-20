
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schema/category.schema';
import { CategoryResquestDto } from './request/category-request.dto';
import { CategorySearchResquestDto } from './request/category-search-request.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) {}

  async create(categoryResquestDto: CategoryResquestDto): Promise<any> {
	try {
       const createTemplate = new this.categoryModel(categoryResquestDto);
	   const result : any =  await createTemplate.save()
	    return  { status: 200, message: 'true', result : result};
     } catch (e) {
         return  { status: 200, message: 'false', result : []};
     }
   }

	async search(categorySearchResquestDto: CategorySearchResquestDto): Promise<any> {
		const result: any =  await this.categoryModel.find({ 'ids': categorySearchResquestDto.ids}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}
}
