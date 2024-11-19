
import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './schema/message.schema';
import { MessageResquestDto } from './request/message-request.dto';
import { MessageSearchResquestDto } from './request/message-search-request.dto';
import { CategoryUpdateResquestDto } from './request/message-update-request.dto';

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>) {}

  async create(messageResquestDto: MessageResquestDto): Promise<any> {
	try {
       const createMesage = new this.messageModel(messageResquestDto);
	   const result : any =  await createMesage.save()
	    return  { status: 200, message: 'true', result : result};
     } catch (e) {
         return  { status: 200, message: 'false', result : []};
     }
   }

	async search(messageSearchResquestDto: MessageSearchResquestDto): Promise<any> {
		const result: any =  await this.messageModel.find({ 'users':  messageSearchResquestDto.id}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

   	// async searchById(categorySearchResquestDto: CategorySearchResquestDto): Promise<any> {
	// 	const result: any =  await this.categoryModel.find({ '_id': categorySearchResquestDto.ids}).exec()
	// 	return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	// }

    // async updateById(categoryUpdateResquestDto: CategoryUpdateResquestDto): Promise<any> {
    //      let newId = new Types.ObjectId(categoryUpdateResquestDto.ids)
	//  	const result: any =  await this.categoryModel.updateOne( { _id: newId }, { $set: { title: categoryUpdateResquestDto.title } },{ upsert: true }).exec()
	// 	return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	// }
}
