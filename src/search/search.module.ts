import { Module } from '@nestjs/common';
import { SubscribeController } from './controller/subscribe.controller';
import { SearchDetailService } from './search.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchDetailSchema } from './schema/search.schema';
@Module({
  imports: [MongooseModule.forFeature([{name: 'Search', schema: SearchDetailSchema}])],
  controllers: [SubscribeController],
  providers: [SearchDetailService],
  exports: [SearchDetailService]
})
export class SearchModule {}
