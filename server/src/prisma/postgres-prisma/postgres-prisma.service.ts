import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { PrismaClient as PostgresPrismaClient } from '../../../node_modules/@prisma/postgres-client';


@Injectable()
export class PostgresPrismaService //Объявление класса
  extends PostgresPrismaClient // который наследуется из PostgresPrismaClient
  implements OnModuleInit, OnModuleDestroy //OnModuleInit и OnModuleDestroy —  хуки NestJS
  //onModuleInit() вызывается, когда модуль инициализируется (запускается);
  //onModuleDestroy() вызывается при завершении работы модуля (например, при остановке сервера).
{
  private readonly logger = new Logger(PostgresPrismaService.name); //Создает логгер с именем PostgresPrismaService, 
  // чтобы выводить информацию в консоль. Logger — это встроенный сервис NestJS для логирования.
  async onModuleInit() {
    let retries = 5;
    // устанвливаю количество попыток подключения к базе данных — 5.
    while (retries > 0) {
      //Запускает цикл, пока есть попытки подключения.
      try {
        await this.$connect();
        //Пытается подключиться к PostgreSQL через Prisma (метод $connect()).

        this.logger.log('Successfully connected to postgres database');
        //Если подключение успешно, логируем сообщение об успешном подключении.

        break;
        //Выходим из цикла — подключение установлено.
      } catch (err) {
        //Если при подключении возникает ошибка — переходим в catch.
        this.logger.error(err);
        //Логируем саму ошибку.

        this.logger.error(
          `there was an error connecting to database, retrying .... (${retries})`,
          //Логируем сообщение о том, что будет повторная попытка подключения.
        );

        retries -= 1;
        //Уменьшаем счетчик попыток на 1.

        await new Promise((res) => setTimeout(res, 3_000)); // wait for three seconds
        //Ждем 3 секунды перед следующей попыткой подключения. Это сделано через setTimeout в Promise.
      }
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    //Метод вызывается при завершении работы приложения — здесь мы отключаемся от базы данных, вызывая $disconnect().
  }
}