1. Установка NEST JS
2. Создание проекта  $ npx nest new project
3. Создание папок "server" "client"
4. Запуск проэкта  $ npm run start:dev
5. Вызов префикса app.setGlobal Prefix ('api')
6. Установка CORS
7. Создание новых сущностей (user, quest, auth) $ nest g resource user --no-spec (--no-spec что бы не добавлялись тесты)
8. Создание DTO. Этосхема DTO (Data Transfer Object). DTO — это объект, который определяет, как данные должны дальше отправляться по сети.
9. Создание декоратором @Controller роута user/, quests/
10. Установка ConfigModule и импорт егоо в AppModule, для удобного доступа к переменным в файле .env
   $ npm i --save @nestjs/config
   Пакет @nestjs/config внутренне использует dotenv .
11. Создаю файл .env вручную

СОЗДАНИЕ  экземпляра PostgreSQL

6. создаю фаил : docker-compose.yml - файл конфигурации, который будет содержать спецификации для запуска контейнера Docker с настройкой PostgreSQL внутри.
Docker Compose — это инструментальное средство, входящее в состав Docker. Оно предназначено для решения задач, связанных с развёртыванием проектов.
Для установки Docker Compose достатосно проверить уктановлен ли на компоус написав команду 
в терминале $ docker compose version
7. создать конфигурацию файла: 
version: '3.8'

services:
  db:
    image: postgres:13 //определяет, какой образ Docker использовать
    container_name: postgres-db
    environment: //environmentопределяет переменные среды, передаваемые контейнеру во время инициализации
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: nestdb
    ports:
      - "5432:5432"
    volumes: //опция используется для сохранения данных в файловой системе хоста.
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:

8. Чтобы запустить postgres контейнер, откройте новое окно терминала и выполните следующую команду в главной папке вашего проекта:
docker-compose up
Перед этим запустить OrbSteck

9. ДЛЯ СПРАВКИ
Prisma schema...........	Описание структуры БД (таблиц, связей и типов). Генерирует клиент.
Entity...................	Представляет бизнес-модель (в NestJS/TypeORM она нужна, но с Prisma — опционально).
DTO (Data Transfer Object)	Определяет форму входных/выходных данных в контроллерах (валидация, безопасность).
