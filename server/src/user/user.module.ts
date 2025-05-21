import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaClient } from './generated/client'

@Module({
  import : [PrismaClient],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
