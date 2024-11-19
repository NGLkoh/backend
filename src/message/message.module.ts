import { Module } from '@nestjs/common';
import { MessageController } from './controller/message.controller';
import { MessageService } from './message.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from './schema/message.schema';
@Module({
  imports: [MongooseModule.forFeature([{name: 'Message', schema: MessageSchema}])],
  controllers: [MessageController],
  providers: [MessageService],
  exports: [MessageService]
})
export class MessageModule {}
