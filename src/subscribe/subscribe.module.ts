import { Module } from '@nestjs/common';
import { SubscribeController } from './controller/subscribe.controller';
import { SubscribeService } from './subscribe.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscribeSchema } from './schema/subscribe.schema';
@Module({
  imports: [MongooseModule.forFeature([{name: 'Subscribe', schema: SubscribeSchema}])],
  controllers: [SubscribeController],
  providers: [SubscribeService],
  exports: [SubscribeService]
})
export class SubscribeModule {}
