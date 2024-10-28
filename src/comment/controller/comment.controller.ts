import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentResponseDto } from '../dto/comment.dto';
import { CommentService } from '../comment.service';
import { CommentResquestDto } from '../request/comment-request.dto';
import { CommentSearchResquestDto } from '../request/comment-search-request.dto';

@Controller('comment')
@ApiTags('Comment')
export class CommentController {
  private readonly logger = new Logger(CommentController.name)
  constructor(private commentService: CommentService) {
}
	@Post('create')
	@ApiOperation({ summary: `create Template`})
	@ApiResponse({status:200, type: CommentResponseDto})
	public async proccessCreateTemplate(@Body() commentResquestDto: CommentResquestDto) {
	return await this.commentService.create(commentResquestDto)
    }

	@Post('search')
	@ApiOperation({ summary: `create Template`})
	@ApiResponse({status:200, type: CommentResponseDto})
	public async proccessSearchTemplate(@Body() commentSearchResquestDto: CommentSearchResquestDto) {
	return await this.commentService.search(commentSearchResquestDto)
    }
	
}