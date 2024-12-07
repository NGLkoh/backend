
import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Subscribe } from './schema/subscribe.schema';
import { SubscribeResquestDto } from './request/subscribe-request.dto';
import { SubscribeSearchResquestDto } from './request/subscribe-search-request.dto';
import { CategoryUpdateResquestDto } from './request/subscribe-update-request.dto';
import { CategoryDeleteResquestDto } from './request/subscribe-delete.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Subscribe.name) private  subscribeModel: Model<Subscribe>) {}

  async create(subscribeResquestDto: SubscribeResquestDto): Promise<any> {
	try {
       const createTemplate = new this.subscribeModel(subscribeResquestDto);
	   const result : any =  await createTemplate.save()
	    return  { status: 200, message: 'true', result : result};
     } catch (e) {
         return  { status: 200, message: 'false', result : []};
     }
   }

	async search(subscribeSearchResquestDto: SubscribeSearchResquestDto): Promise<any> {
		const result: any =  await this.subscribeModel.find({ 'ids': subscribeSearchResquestDto.ids}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

   	async searchById(subscribeSearchResquestDto: SubscribeSearchResquestDto): Promise<any> {
		const result: any =  await this.subscribeModel.find({ '_id': subscribeSearchResquestDto.ids}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

    async updateById(categoryUpdateResquestDto: CategoryUpdateResquestDto): Promise<any> {
         let newId = new Types.ObjectId(categoryUpdateResquestDto.ids)
	 	const result: any =  await this.subscribeModel.updateOne( { _id: newId }, { $set: { title: categoryUpdateResquestDto.title } },{ upsert: true }).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

        async all(): Promise<any> {
		const result: any =  await this.subscribeModel.find().exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	} 
     
       async deleteCat(categoryDeleteResquestDto: CategoryDeleteResquestDto): Promise<any> {
        let newId = new Types.ObjectId(categoryDeleteResquestDto.ids)
	 	const result: any =  await this.subscribeModel.deleteOne({ '_id': newId}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

}
