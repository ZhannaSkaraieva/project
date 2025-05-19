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
npx prisma init
Создание новый prisma каталог с schema.prisma файлом. Это основной файл конфигурации, содержащий схему вашей базы данных. 
Создание.env файла. - если его нету

11. Установка переменного окружения
// .env
DATABASE_URL="postgresql://postgres:password@localhost:5432/nestdb?schema=public"

12. Моделирование данных в prisma/prisma.schema

13. Использую Prisma Migrate для создания таблиц в базе данных.
Чтобы сопоставить модель данных со схемой базы данных, необходимо использовать prisma migrate
npx prisma migrate dev --name init

Эта команда выполняет две функции:

Создает новый файл миграции SQL для этой миграции.
Запускает файл миграции SQL в базе данных.

Команда сохранит копию базы и фаил миграции в папке prisma/migrations
Prisma сгенерирует Prisma Client на основе вашей последней схемы.

Запуск просмотра БД 
npx prisma studio


14. Создание службы Prisma. Это абстрагирование API Prisma Client от приложения для дальнейшего переиспользования.
Эта служба, называемая PrismaService, будет отвечать за создание PrismaClient экземпляра и подключение к вашей базе данных.
npx nest generate module prisma
npx nest generate service prisma

15. Import модуль PrismaService в app.modelu.ts

14. Добавление PrismaClientв Users модуль
