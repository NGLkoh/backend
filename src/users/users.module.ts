import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/users.schema';
import { ConfigModule , ConfigService} from '@nestjs/config';
import { UserController } from './controller/users.controller';
import { UserService } from './users.service';
@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
    controllers: [UserController],
	providers: [UserService],
	exports: [UserService]
})

export class UsersModule {}
