
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './schema/comment.schema';
import { CommentResquestDto } from './request/comment-request.dto';
import { CommentSearchResquestDto } from './request/comment-search-request.dto';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {}

  async create(categoryResquestDto: CommentResquestDto): Promise<any> {
	try {
       const createTemplate = new this.commentModel(categoryResquestDto);
	   const result : any =  await createTemplate.save()
	    return  { status: 200, message: 'true', result : result};
     } catch (e) {
         return  { status: 200, message: 'false', result : []};
     }
   }

	async search(commentSearchResquestDto: CommentSearchResquestDto): Promise<any> {
		const result: any =  await this.commentModel.find({ 'ids': commentSearchResquestDto.ids}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}

    async all(): Promise<any> {
		const result: any =  await this.commentModel.find().exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	} 
}
