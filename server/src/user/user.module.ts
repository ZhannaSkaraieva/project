
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaClient as PostgresPrismaClient} from '../../node_modules/@prisma/postgres-client'; // Импортируем PrismaClient из сгенерированного кода
import { PostgresPrismaService } from '../prisma/postgres-prisma/postgres-prisma.service'; // Импортируем PrismaService

@Module({
  imports : [PostgresPrismaClient], // Импортируем PrismaClient
  controllers: [UserController],
  providers: [UserService, PostgresPrismaService], // Добавляем PrismaService в провайдеры
})
export class UserModule {}
