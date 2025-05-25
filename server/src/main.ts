import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors(); //Cross-origin resource sharing (CORS) — это механизм, который позволяет запрашивать ресурсы из другого домена. 
  //Чтобы включить CORS, вызовите enableCors()метод для объекта приложения Nest.
  app.useGlobalPipes(new ValidationPipe());//настраимаю ValidationPipe его как канал глобальной области действия , 
  // чтобы он применялся к каждому обработчику маршрутов во всем приложении.
  // ValidationPipeпредоставляется Nest из коробки
  //Используют автоматической проверки входящих запросов Nest правильность любых данных, отправляемых в веб-приложение.  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
