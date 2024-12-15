import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentResponseDto } from '../dto/comment.dto';
import { MediaService } from '../media.service';
import { MediaResquestDto } from '../request/media-request.dto';
import { MediaSearchResquestDto } from '../request/media-search-request.dto';
import { MediaRemoveResquestDto } from '../request/media-delete-request.dto';

@Controller('Media')
@ApiTags('Media')
export class MediaController {
  private readonly logger = new Logger(MediaController.name)
  constructor(private mediaService: MediaService) {
}
	@Post('create')
	@ApiOperation({ summary: `create Media`})
	@ApiResponse({status:200, type: MediaResquestDto})
	public async proccessCreateMedia(@Body() mediaResquestDto: MediaResquestDto) {
	return await this.mediaService.create(mediaResquestDto)
    }

	@Post('search')
	@ApiOperation({ summary: `search Media`})
	@ApiResponse({status:200, type: CommentResponseDto})
	public async proccessSearchMedia(@Body() mediaSearchResquestDto: MediaSearchResquestDto) {
	return await this.mediaService.search(mediaSearchResquestDto)
    }

   	@Post('remove')	
	@ApiOperation({ summary: `remove Media By Id`})
	@ApiResponse({status:200, type: CommentResponseDto})
	public async proccessRemoveMediaById(@Body() removeRequestDTO: MediaRemoveResquestDto) {
	return await this.mediaService.remove(removeRequestDTO)
	   }
	
}