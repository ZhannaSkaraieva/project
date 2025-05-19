import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors(); //Cross-origin resource sharing (CORS) — это механизм, который позволяет запрашивать ресурсы из другого домена. 
  //Чтобы включить CORS, вызовите enableCors()метод для объекта приложения Nest.
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
