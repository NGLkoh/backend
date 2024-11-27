
import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from '../dto/user.dto';
import { UserService } from '../users.service';
import { UserResquestDto } from '../request/user.request';
import { SearchResquestDto } from '../request/user-find.request';
import { UserCreateResquestDto } from '../request/user-create.request';
import { EmailResquestDto } from '../request/email-create.request';
import { UploadResquestDto } from '../request/upload.request';
import { CodeResquestDto } from '../request/request-code.request'
import { UserResquestIdsDto } from '../request/subuser.request';
import { UserDeleteResquestIdDto } from '../request/delete-subuser.request';
import { SearchResquestByIdDto } from '../request/user-by-id.request';
import { VerifyUserResquestByIdDto } from '../request/verify-user.request';
import { AddProfileResquestByIdDto } from '../request/add-profile.request';

@Controller('user')
@ApiTags('User')
export class UserController {
  private readonly logger = new Logger(UserController.name)
  constructor(private usersService: UserService) {
}

	@Get('Users')
		@ApiOperation({ summary: `get all users`})
		@ApiResponse({status:200, type: UserResponseDto})
		public async proccessUserList() {
		return await this.usersService.findAll()
	}


	@Post('create')
	@ApiOperation({ summary: `create users`})
	@ApiResponse({status:200, type: UserResponseDto})
	public async proccessCreateUser(@Body() userCreateResquestDto: UserCreateResquestDto) {
	return await this.usersService.create(userCreateResquestDto)
    }

	@Post('create-sub')
		@ApiOperation({ summary: `create sub users`})
		@ApiResponse({status:200, type: UserResponseDto})
		public async proccessCreateSubUser(@Body() userCreateResquestDto: UserCreateResquestDto) {
		return await this.usersService.createSub(userCreateResquestDto)
    }

	@Post('search')
	@ApiOperation({ summary: `find users`})
	@ApiResponse({status:200, type: UserResponseDto})
	public async proccessSearchUser(@Body() searchResquestDto: SearchResquestDto) {
	return await this.usersService.search(searchResquestDto)
   }


    @Post('search-by-id')
	@ApiOperation({ summary: `find users`})
	@ApiResponse({status:200, type: UserResponseDto})
	public async proccessSearchUserById(@Body() searchResquestByIdDto: SearchResquestByIdDto) {
	return await this.usersService.searchById(searchResquestByIdDto)
   }

	@Post('searchSub')
	@ApiOperation({ summary: `find users sub`})
	@ApiResponse({status:200, type: UserResponseDto})
	public async proccessSearchUserSub(@Body() userResquestIdsDto: UserResquestIdsDto) {
	return await this.usersService.searchSub(userResquestIdsDto)
   }
	
    @Post('remove')
	@ApiOperation({ summary: `delete users`})
	@ApiResponse({status:200, type: UserResponseDto})
	public async proccessDeleteUserSub(@Body() userDeleteResquestIdDto: UserDeleteResquestIdDto) {
	return await this.usersService.deleteSub(userDeleteResquestIdDto)
   }
	
	@Post('email')
	@ApiOperation({ summary: `Sending email`})
	@ApiResponse({status:200, type: UserResponseDto})
	public async email(@Body() emailResquestDto: EmailResquestDto) {
	return await this.usersService.sendEmail(emailResquestDto)
   }

	@Post('verify')
	@ApiOperation({ summary: `Sending email`})
	@ApiResponse({status:200, type: UserResponseDto})
	public async verify(@Body() CodeResquestDto: CodeResquestDto) {
	return await this.usersService.verifyCode(CodeResquestDto)
   }
   @Post('confirm-verify')
	@ApiOperation({ summary: `Sending email`})
	@ApiResponse({status:200, type: UserResponseDto})
	public async confirmVerify(@Body() verifyUserResquestByIdDto: VerifyUserResquestByIdDto) {
	return await this.usersService.confirmVerify(verifyUserResquestByIdDto)
   }

    @Post('add-profile-blog')
	@ApiOperation({ summary: `add profile blog`})
	@ApiResponse({status:200, type: UserResponseDto})
	public async addProfileBlog(@Body() addProfileResquestByIdDto: AddProfileResquestByIdDto) {
	return await this.usersService.addProfileBlog(addProfileResquestByIdDto)
   }

    @Post('edit-profile-blog')
	@ApiOperation({ summary: `edit profile blog`})
	@ApiResponse({status:200, type: UserResponseDto})
	public async editProfileBlog(@Body() editdProfileResquestByIdDto: AddProfileResquestByIdDto) {
	return await this.usersService.editProfileBlog(editdProfileResquestByIdDto)
   }
}