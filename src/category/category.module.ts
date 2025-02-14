import { Module } from '@nestjs/common';
import { CategoryController } from './controller/category.controller';
import { CategoryService } from './category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './schema/category.schema';
@Module({
  imports: [MongooseModule.forFeature([{name: 'Category', schema: CategorySchema}])],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService]
})
export class CategoryModule {}
