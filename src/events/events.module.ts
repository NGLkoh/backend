import { Module } from '@nestjs/common';
import { EventController } from './controller/events.module.controller';
import { EventService } from './events.module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './schema/events.module.schema';
@Module({
  imports: [MongooseModule.forFeature([{name: 'Event', schema: EventSchema}])],
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService]
})
export class EventModule {}
