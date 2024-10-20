import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/users.schema';
import { UserResquestDto } from './request/user.request';
import { UserCreateResquestDto } from './request/user-create.request';
import { CodeResquestDto } from './request/request-code.request';
import { UserResquestIdsDto } from './request/subuser.request';
import { UserDeleteResquestIdDto } from './request/delete-subuser.request';
const nodeMailer = require('nodemailer')

const MAILCHIMP_CLIENT_ID = process.env.CLIENT_KEY;
const MAILCHIMP_CLIENT_SECRET =process.env.MAILCHIMP_API_KEY;


// import { SMTPClient } from 'emailjs';

// const client = new SMTPClient({
// 	user: 'nigel19pogiu@gmail.com',
// 	password: '120707Dnd',
// 	host: 'smtp.nigel19pogiu@gmail.com',
// 	ssl: true,
// });


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(userCreateResquestDto: UserCreateResquestDto): Promise<any> {
	try {
       const createUser = new this.userModel(userCreateResquestDto);
	   const result : any =  await createUser.save()
	    return  { status: 200, message: 'true', result : result};
     } catch (e) {
         return  { status: 200, message: 'false', result : []};
     }
  }

  async createSub(userCreateResquestDto: UserCreateResquestDto): Promise<any> {
	try {
       const createUser = new this.userModel(userCreateResquestDto);
	   const result : any =  await createUser.save()
	    return  { status: 200, message: 'true', result : result};
     } catch (e) {
         return  { status: 200, message: 'false', result : []};
     }
  }

  async search(userResquestDto: UserResquestDto): Promise<any> {
 	const result: any =  await this.userModel.find({ 'username': userResquestDto.username,  'password': userResquestDto.password}).exec()
    return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
  }
 
  async searchSub(userResquestIdsDto: UserResquestIdsDto): Promise<any> {
 	const result: any =  await this.userModel.find({ 'ids': userResquestIdsDto.ids}).exec()
    return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
  }
 
  async deleteSub(userDeleteResquestIdDto: UserDeleteResquestIdDto): Promise<any> {
	console.log(userDeleteResquestIdDto.id)
 	const result: any =  await this.userModel.deleteOne({ '_id': userDeleteResquestIdDto.id}).exec()
    return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
  }
 
  async verifyCode(codeResquestDto: CodeResquestDto): Promise<any> {
 	const result: any =  await this.userModel.find({ 'code': codeResquestDto.code}).exec()
    return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
  }

  public async findAll(): Promise<any> {
	const result =  await this.userModel.find().exec()
    return  { status: 200, message: 'true', result : result};
  }

  public async sendEmail(emailResquestDto): Promise<any> {

// create reusable transporter object using the default SMTP transport
		 let transporter = nodeMailer.createTransport({
			host: "smtp-relay.brevo.com",
			port: 465,
			secure: true, // true for 465, false for other ports
			auth: {
				user: "7d1b62003@smtp-brevo.com", // generated ethereal user
				pass: "8cdjwyZpRPJbEsW5", // generated ethereal password
			},
		 });

     	 let info = await transporter.sendMail({
			from: '"smeco" ianmedina0909@gmail.com', // sender address
			to: emailResquestDto.email, // list of receivers
			subject: "Verification Code ✔", // Subject line
			text: `Hello, Here is your verification code for SMECO "${emailResquestDto.code}" `, // plain text body
		 });
			
      console.log(info)
      console.log("Message sent: %s", info.messageId);
       return  { status: 200, message: 'true', result : "sending"};
  }

}
