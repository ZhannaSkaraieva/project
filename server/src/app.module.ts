import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { FavoriteModule } from './favorite/favorite.module';
import { QuestsModule } from './quests/quests.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module'; // Импортируем PrismaModule
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, OrdersModule, FavoriteModule, QuestsModule, ConfigModule.forRoot({isGlobal: true,})],
  controllers: [AppController],
  //Включить аутентификацию глобально
  //Если подавляющее большинство конечных точек должно быть защищено по умолчанию, можно зарегистрировать 
  // защитник аутентификации как глобальный защитник и вместо использования @UseGuards()декоратора 
  // поверх каждого контроллера просто указать, какие маршруты должны быть общедоступными.
  providers: [
    {
      provide: APP_GUARD,
      useClass: ValidationPipe, //(ValidationPipe)
    },
    AppService
  ]
})
export class AppModule { }

//ConfigModule.forRoot()
//Приведенный выше код загрузит и проанализирует .envфайл из расположения по умолчанию (корневой каталог проекта),
//объединит пары ключ/значение из .envфайла с переменными среды, назначенными для process.env, и 
//сохранит результат в закрытой структуре, к которой вы можете получить доступ через ConfigService

//Для использования ConfigModule в других модулях,нужно импортировать его,объявить его как глобальный модуль isGlobal

