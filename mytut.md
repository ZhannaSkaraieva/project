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

8. Чтобы запустить postgres контейнер, необходимо открыть новое окно терминала и выполнить команду в главной папке проекта:
docker-compose up

Перед этим запустить OrbSteck

9. ДЛЯ СПРАВКИ
Prisma schema...........	Описание структуры БД (таблиц, связей и типов). Генерирует клиент.
Entity...................	Представляет бизнес-модель (в NestJS/TypeORM она нужна, но с Prisma — опционально).
DTO (Data Transfer Object)	Определяет форму входных/выходных данных в контроллерах (валидация, безопасность).

НАСТРОЙКА Prisma

10. инициализация 
npm install -D prisma  - запуск команд и взаимодействие с проектом.
npx prisma init - эту команду использую для создания файла в случае с одной БД
Иначе создаю руками структуру.

Создание.env файла. - если его нету

11. Установка переменного окружения
// .env
DATABASE_URL="postgresql://postgres:password@localhost:5432/nestdb?schema=public"

12. Моделирование данных в prisma/prisma.schema

npx prisma generate --schema=prisma/postgres/schema.prisma
npx prisma generate --schema=prisma/mongo/schema.prisma

генерации клиента: перед тем как сгенерировать клиента нужно прописать в схеме путь output к папке , где будет создана служба Prisma 
или еще называют Database

13. Использую Prisma Migrate для создания таблиц в базе данных.
Чтобы сопоставить модель данных со схемой базы данных, необходимо использовать prisma migrate
(npx prisma migrate dev --name init)

Запуск миграций для postgres
npx prisma migrate dev --schema=prisma/postgres/schema.prisma

(если нужно переписать базу новую)- npx prisma migrate reset --schema=prisma/postgres/schema.prisma

Синхронизация схемы Prisma для mongo
npx prisma db push --schema=prisma/mongo/schema.prisma

Эта команда выполняет две функции:

Создает новый файл миграции SQL для этой миграции.
Запускает файл миграции SQL в базе данных.

Команда сохранит копию базы и фаил миграции в папке prisma/migrations

Запуск просмотра БД 
npx prisma studio --schema=prisma/postgres/schema.prisma

CRUD операции с Prisma Client

14. Создание службы Prisma. 
Создание модуля базы данных или Интегрируем Prisma в приложение для єтого внутри src каталога создайте новый файл с именем prisma.service.ts.

Prisma Client — это автоматически сгенерированный и типобезопасный конструктор запросов, который настраивается под ваши данные. 
Установка Prisma Client в проект с помощью команды:

npm install @prisma/client

Когда вносятся изменения в базу данных, которые отражаются в схеме Prisma, необходимо вручную повторно сгенерировать Prisma Client, чтобы обновить сгенерированный код 

npx nest g service prisma/postgres-prisma --no-spec
npx nest g service prisma/mongo-prisma --no-spec

15. 

16. 

Регистрация пользователя.

17. Валидация 
npm i --save class-validator class-transformer

в документе create-user.dto.ts каждому свойству обекта User присваиваем декоратор валидатора 
https://github.com/typestack/class-validator?tab=readme-ov-file#table-of-contents



