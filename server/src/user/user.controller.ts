import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

//http://localhost:3000/api/user - создание декоратором @Controller роута
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {} //через конструктор заинжектен доступ к сервису

  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto){
    //@Body() — декоратор, который говорит NestJS:
    //"возьми тело запроса (JSON) и засунь его в переменную createUserDto".
    //createUserDto: CreateUserDto — это тип (DTO = Data Transfer Object), который описывает форму ожидаемых данных, например:
    //пример для запроса : {"id":1,"email": "test@example.com", "password": "123456","roles": ["user"]}
   
    //привязываю ValidationPipe к @Body()декоратору обработчика маршрута, чтобы наш канал вызывался для проверки тела поста.
    return this.userService.create(createUserDto);
    //Вызов метода create у сервиса UserService, и передача в него полученных данных. Эти данные передаем с помощью Postman
    // В UserService хранитья логика сохранения пользователя в базу данных.
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(Number(id));
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
