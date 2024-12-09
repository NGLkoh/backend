
import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Search } from './schema/search.schema';
import { SearchDetailResquestDto } from './request/search-request.dto';

@Injectable()
export class SearchDetailService {
  constructor(@InjectModel(Search.name) private  searchModel: Model<Search>) {}

  async create(searchDetailResquestDto: SearchDetailResquestDto): Promise<any> {
    console.log(searchDetailResquestDto)
	try {
       const search = new this.searchModel(searchDetailResquestDto);
	   const result : any =  await search.save()
     console.log(result)
	    return  { status: 200, message: 'true', result : result};
     } catch (e) {
         return  { status: 200, message: 'false', result : []};
     }
   }

	// async searchByEmail(subscribeSearchResquestDto: SubscribeSearchResquestDto): Promise<any> {
    //     console.log(subscribeSearchResquestDto)
	// 	const result: any =  await this.subscribeModel.find({ 'email': subscribeSearchResquestDto.email}).exec()
    //     console.log(result)
	// 	return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	// }

   	// async searchById(subscribeSearchResquestDto: SubscribeSearchResquestDto): Promise<any> {
	// 	const result: any =  await this.subscribeModel.find({ 'email': subscribeSearchResquestDto.email}).exec()
	// 	return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	// }

    // async updateById(categoryUpdateResquestDto: CategoryUpdateResquestDto): Promise<any> {
    //      let newId = new Types.ObjectId(categoryUpdateResquestDto.ids)
	//  	const result: any =  await this.subscribeModel.updateOne( { _id: newId }, { $set: { title: categoryUpdateResquestDto.title } },{ upsert: true }).exec()
	// 	return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	// }

    //  async sendMailBulk(subscribeSendMailResquestDto: SubscribeSendMailResquestDto): Promise<any> {

    //     console.log(subscribeSendMailResquestDto)
	//  	  let transporter = nodeMailer.createTransport({
	// 		host: "smtp-relay.brevo.com",
	// 		port: 465,
	// 		secure: true, // true for 465, false for other ports
	// 	    auth: {
	// 			user: "8171ef001@smtp-brevo.com", // generated ethereal user
	// 			pass: "TCqRSk9LsZhz0UHc", // generated ethereal password
	// 		},
	//  });


 	//  await transporter.sendMail({
	// 		from: '"Markadong Pinoy" bdmpkitsolutions24@gmail.com', // sender address
	// 		to: subscribeSendMailResquestDto.email, // list of receivers
	// 		subject: subscribeSendMailResquestDto.subject, // Subject line
	// 		html: subscribeSendMailResquestDto.html, // plain text body
	//  });

    //    return { status: 200, message:  'true', result : 'sent'};
	// }

    //     async all(): Promise<any> {
	// 	const result: any =  await this.subscribeModel.find().exec()
	// 	return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	// } 
     
    //    async deleteSub(subscribeDeleteResquestDto: SubscribeDeleteResquestDto): Promise<any> {
    //     let newId = new Types.ObjectId(subscribeDeleteResquestDto.ids)
	//  	const result: any =  await this.subscribeModel.deleteOne({ '_id': newId}).exec()
	// 	return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	// }

}
