import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EventResponseDto } from '../dto/events.module.dto';
import { EventService } from '../events.module.service';
import { EventResquestDto } from '../request/events.module-request.dto';
import { CategorySearchResquestDto } from '../request/events.module-search-request.dto';
import { EventUpdateResquestDto } from '../request/events.module-update-request.dto';
import { EventUpdateUserResquestDto } from '../request/events.module-add-update-request.dto';
import { RemoveEventRequestDTO } from '../request/events.module-remove-data-request.dto';

@Controller('event')
@ApiTags('Event')
export class EventController {
  private readonly logger = new Logger(EventController.name)
  constructor(private eventService: EventService) {
}
	@Post('create')
	@ApiOperation({ summary: `create Event`})
	@ApiResponse({status:200, type: EventResponseDto})
	public async proccessCreateTemplate(@Body() eventResquestDto: EventResquestDto) {
	return await this.eventService.create(eventResquestDto)
    }
     
    @Post('search')
	@ApiOperation({ summary: `search Event By Ids`})
	@ApiResponse({status:200, type: EventResponseDto})
	public async proccessSearchEvent(@Body() categorySearchResquestDto: CategorySearchResquestDto) {
	return await this.eventService.search(categorySearchResquestDto)
    }

	@Post('all')
	@ApiOperation({ summary: `all`})
	@ApiResponse({status:200, type: EventResponseDto})
	public async proccessSearchCategory() {
	return await this.eventService.all()
    }
	
	@Post('searchById')
	@ApiOperation({ summary: `search Event By Id`})
	@ApiResponse({status:200, type: EventResponseDto})
	public async proccessSearchCategoryById(@Body() categorySearchResquestDto: CategorySearchResquestDto) {
	return await this.eventService.searchById(categorySearchResquestDto)
    }

   	@Post('updateById')
	@ApiOperation({ summary: `Update Event By Id`})
	@ApiResponse({status:200, type: EventResponseDto})
	public async proccessUpdateEventById(@Body() eventUpdateResquestDto: EventUpdateResquestDto) {
	return await this.eventService.updateById(eventUpdateResquestDto)
    }

    @Post('updateUsersEventById')
	@ApiOperation({ summary: `Update Event By Id`})
	@ApiResponse({status:200, type: EventResponseDto})
	public async proccessUpdateEventCategoryById(@Body() eventUpdateUserResquestDto: EventUpdateUserResquestDto) {
	return await this.eventService.addUserToEvent(eventUpdateUserResquestDto)
    }

    @Post('remove')
	@ApiOperation({ summary: `remove Event By Id`})
	@ApiResponse({status:200, type: EventResponseDto})
	public async proccessRemoveEventCategoryById(@Body() removeEventRequestDTO: RemoveEventRequestDTO) {
	return await this.eventService.removeEvent(removeEventRequestDTO)
    }
    
}