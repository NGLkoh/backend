
import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Event } from './schema/events.module.schema';
import { EventResquestDto } from './request/events.module-request.dto';
import { CategorySearchResquestDto } from './request/events.module-search-request.dto';
import { EventUpdateResquestDto } from './request/events.module-update-request.dto';
import { EventUpdateUserResquestDto } from './request/events.module-add-update-request.dto';
import { RemoveEventRequestDTO } from './request/events.module-remove-data-request.dto';
@Injectable()
export class EventService {
  constructor(@InjectModel(Event.name) private eventModel: Model<Event>) {}

  async create(eventResquestDto: EventResquestDto): Promise<any> {
	try {
       const createTemplate = new this.eventModel(eventResquestDto);
	   const result : any =  await createTemplate.save()
	    return  { status: 200, message: 'true', result : result};
     } catch (e) {
         return  { status: 200, message: 'false', result : []};
     }
   }

	async search(categorySearchResquestDto: CategorySearchResquestDto): Promise<any> {
		const result: any =  await this.eventModel.find({ 'ids': categorySearchResquestDto.ids}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

    async all(): Promise<any> {
		const result: any =  await this.eventModel.find().exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	} 

   	async searchById(categorySearchResquestDto: CategorySearchResquestDto): Promise<any> {
		const result: any =  await this.eventModel.find({ '_id': categorySearchResquestDto.ids}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

    async updateById(eventUpdateResquestDto: EventUpdateResquestDto): Promise<any> {
         let newId = new Types.ObjectId(eventUpdateResquestDto.id)
	 	const result: any =  await this.eventModel.updateOne( { _id: newId }, { $set: { ...eventUpdateResquestDto.data } },{ upsert: true }).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

     async addUserToEvent(eventUpdateUserResquestDto: EventUpdateUserResquestDto): Promise<any> {
         let newId = new Types.ObjectId(eventUpdateUserResquestDto.ids)
	 	const result: any =  await this.eventModel.updateOne( { _id: newId }, { $push: { users: eventUpdateUserResquestDto.userId }  },{ upsert: true }).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

    async removeEvent(removeEventRequestDTO: RemoveEventRequestDTO): Promise<any> {
        let newId = new Types.ObjectId(removeEventRequestDTO.id)
	 	const result: any =  await this.eventModel.deleteOne({ '_id': newId}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

    

}
