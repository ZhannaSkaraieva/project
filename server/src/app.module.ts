import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { FavoriteModule } from './favorite/favorite.module';
import { QuestsModule } from './quests/quests.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, AuthModule, OrdersModule, FavoriteModule, QuestsModule, ConfigModule.forRoot({isGlobal: true,}), PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

//ConfigModule.forRoot()
//Приведенный выше код загрузит и проанализирует .envфайл из расположения по умолчанию (корневой каталог проекта),
//объединит пары ключ/значение из .envфайла с переменными среды, назначенными для process.env, и 
//сохранит результат в закрытой структуре, к которой вы можете получить доступ через ConfigService

//Для использования ConfigModule в других модулях,нужно импортировать его,объявить его как глобальный модуль isGlobal

