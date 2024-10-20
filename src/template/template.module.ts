import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './controller/template.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplateSchema } from './schema/template.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Template', schema: TemplateSchema}])],
    controllers: [TemplateController],
	providers: [TemplateService],
	exports: [TemplateService]
})

export class TemplateModule {}
