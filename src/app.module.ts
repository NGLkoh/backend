import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TemplateModule } from './template/template.module';
import { CategoryModule } from './category/category.module';
import {CommentModule } from './comment/comment.module'
import {MediaModule } from './media/media.module'
import {MessageModule } from './message/message.module'
import {EventModule } from './events/events.module'
import { SubscribeModule } from './subscribe/subscribe.module';
@Module({
  imports: [ 
  UsersModule,
  ConfigModule.forRoot({
      expandVariables: true}),
  ConfigModule.forRoot(),
  MongooseModule.forRoot(process.env.MONGO_URL),
  TemplateModule,
  MediaModule,
  CommentModule,
  SubscribeModule,
  MessageModule,
  EventModule,
  CategoryModule],
  providers: [AppService],
})


export class AppModule {}
