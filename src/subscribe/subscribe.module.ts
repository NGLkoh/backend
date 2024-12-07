import { Module } from '@nestjs/common';
import { CategoryController } from './controller/subscribe.controller';
import { CategoryService } from './subscribe.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscribeSchema } from './schema/subscribe.schema';
@Module({
  imports: [MongooseModule.forFeature([{name: 'Subscribe', schema: SubscribeSchema}])],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService]
})
export class SubscribeModule {}
