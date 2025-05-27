import { BadRequestException, Injectable } from '@nestjs/common';
import { PostgresPrismaService } from '../prisma/postgres-prisma/postgres-prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';




@Injectable()

export class UserService { //injected using the constructor (внедрено с помощью конструктора)
  constructor(private prisma: PostgresPrismaService) { } 
  
  async create(createUserDto: CreateUserDto) {
    const checkUser = await this.prisma.user.findUnique({
      //создаю переменную и задаю ей условие что в юсерах необходимо найти имэил и если есть такой , по выдает сообщение
      where: {
        email: createUserDto.email, 
      },
    });
    if (checkUser) throw new BadRequestException(`User exist`)
    
    const salt = await bcrypt.genSalt();
    //если условие первоене выполненное то создается новый юсер с уникальным адресом
    const newUser = await this.prisma.user.create({
      data: {
      email: createUserDto.email,
      password: await bcrypt.hash(createUserDto.password,salt),//добавляю хеширование пароля
      },
    });
    return {newUser}
  }

  async findOne(email: string) { //создаю функцию для
    return await this.prisma.user.findUnique({ //жду ответа от базы данных
      //в базе данных ищу юзера по уникальному имэилу
      //если есть такой юзер то возвращаю его
      where: {
         email: email,
      }
    });
  }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number, number: any) : Promise<User | undefined> {
  //   return this.prisma.user.findUnique({
  //     where:{ id},
  //   });
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}



