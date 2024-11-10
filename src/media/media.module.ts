import { Module } from '@nestjs/common';
import { MediaController } from './controller/media.controller';
import { MediaService } from './media.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaSchema } from './schema/media.schema';
@Module({
  imports: [MongooseModule.forFeature([{name: 'Media', schema: MediaSchema}])],
  controllers: [MediaController],
  providers: [MediaService],
  exports: [MediaService]
})
export class MediaModule {}
