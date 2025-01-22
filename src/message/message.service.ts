
import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './schema/message.schema';
import { MessageResquestDto } from './request/message-request.dto';
import { MessageSearchResquestDto } from './request/message-search-request.dto';
import { MessageUpdateResquestDto } from './request/message-update-request.dto';
import { MessageRemoveResquestDto } from './request/message-remove-request.dto';

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
		const result: any =  (await this.messageModel.find({ 'users':  messageSearchResquestDto.id}).sort({dateCreated : -1}).exec())
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}
  
    async searchChecker(messageSearchResquestDto: MessageSearchResquestDto): Promise<any> {
		const result: any =  (await this.messageModel.find({ 'createdBy':  messageSearchResquestDto.id}).sort({dateCreated : -1}).exec())
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

   	async updateById(messageUpdateResquestDto: MessageUpdateResquestDto): Promise<any> {
		await this.messageModel.updateOne({ '_id': messageUpdateResquestDto.messageId} , { $push: { convo: {message : messageUpdateResquestDto.message, id: messageUpdateResquestDto.userId }  }}).exec()
		const result: any =  await this.messageModel.find({ 'users':  messageUpdateResquestDto.userId}).exec()		
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

    async removeById(messageRemoveResquestDto: MessageRemoveResquestDto): Promise<any> {
          let newId = new Types.ObjectId(messageRemoveResquestDto.id)
		const result: any =  await this.messageModel.deleteOne({ '_id': newId}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}


    // async updateById(categoryUpdateResquestDto: CategoryUpdateResquestDto): Promise<any> {
    //      let newId = new Types.ObjectId(categoryUpdateResquestDto.ids)
	//  	const result: any =  await this.categoryModel.updateOne( { _id: newId }, { $set: { title: categoryUpdateResquestDto.title } },{ upsert: true }).exec()
	// 	return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	// }
}
