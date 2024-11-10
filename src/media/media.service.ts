
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Media } from './schema/media.schema';
import { MediaResquestDto } from './request/media-request.dto';
import { MediaSearchResquestDto } from './request/media-search-request.dto';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media.name) private mediaModel: Model<Media>) {}

  async create(mediaResquestDto: MediaResquestDto): Promise<any> {
	try {
       const createMedia = new this.mediaModel(mediaResquestDto);
	   const result : any =  await createMedia.save()
	    return  { status: 200, message: 'true', result : result};
     } catch (e) {
         return  { status: 200, message: 'false', result : []};
     }
   }

	async search(mediaSearchResquestDto: MediaSearchResquestDto): Promise<any> {
		const result: any =  await this.mediaModel.find({ 'ids': mediaSearchResquestDto.ids}).exec()
		return { status: 200, message: result.length >= 1  ? 'true' : 'false', result : result};
	}
}
