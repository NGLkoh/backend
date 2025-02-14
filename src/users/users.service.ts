import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/users.schema';
import { UserResquestDto } from './request/user.request';
import { UserCreateResquestDto } from './request/user-create.request';
import { CodeResquestDto } from './request/request-code.request'
import { UploadResquestDto } from './request/upload.request';
import { UserResquestIdsDto } from './request/subuser.request';
import { UserDeleteResquestIdDto } from './request/delete-subuser.request';
import { SearchResquestByIdDto } from './request/user-by-id.request';
import { VerifyUserResquestByIdDto } from './request/verify-user.request';
import { AddProfileResquestByIdDto } from './request/add-profile.request';
const nodeMailer = require('nodemailer')

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

  async searchById(searchResquestByIdDto: SearchResquestByIdDto): Promise<any> {
    let newId = new Types.ObjectId(searchResquestByIdDto.id)
 	const result: any =  await this.userModel.find({ '_id': newId}).exec()
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
			
      console.log("Message sent: %s", info.messageId);
       return  { status: 200, message: 'true', result : "sending"};
  }

  async confirmVerify(verifyUserResquestByIdDto: VerifyUserResquestByIdDto): Promise<any> {
        let newId = new Types.ObjectId(verifyUserResquestByIdDto.id)
         console.log(verifyUserResquestByIdDto , "DSDS")
		const result: any =  await this.userModel.updateOne( { _id: newId }, [{ $set: { active: verifyUserResquestByIdDto.value } }],{ upsert: true }).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}
 async addProfileBlog(addProfileResquestByIdDto: AddProfileResquestByIdDto): Promise<any> {
        let newId = new Types.ObjectId(addProfileResquestByIdDto.id)
         console.log(addProfileResquestByIdDto , "DSDS")
        await this.userModel.updateOne( { _id: newId }, [{ $set: { profileSet: 1 } }],{ upsert: true }).exec()
		const result: any =  await this.userModel.updateOne( { _id: newId }, { $push: { profile: addProfileResquestByIdDto.data } },{ upsert: true }).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}
 async editProfileBlog(addProfileResquestByIdDto: AddProfileResquestByIdDto): Promise<any> {
        let newId = new Types.ObjectId(addProfileResquestByIdDto.id)
         console.log(addProfileResquestByIdDto , "DSDS")
        await this.userModel.updateOne( { _id: newId }, [{ $set: { profileSet: 1 } }],{ upsert: true }).exec()
		const result: any =  await this.userModel.updateOne( { _id: newId }, { $set: { profile: addProfileResquestByIdDto.data } },{ upsert: true }).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}
 
}
// {
//   id: '6734a42a7a49253a8223746e',
//   data: {
//     facebook: '/nigel',
//     twitter: '/nigel',
//     linkIn: '/nigel',
//     instagram: '/nigel',
//     fileName: 'rg01mg-profile.jpg',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'
//   }
// }