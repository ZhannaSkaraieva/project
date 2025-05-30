import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service'; // Импортируем UsersService
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
    //подключаю или инициализирую сервисы, которые будут использоваться в AuthService
  constructor(
    private userService: UserService,//теперь это доступ к сервису UserService

    private jwtService: JwtService)// пункт 28
  { }

  async validateUser(email: string, password: string){ // Функция для валидации пользователя в которую передаю почту и пароль

      const user = await this.userService.findOne(email); // Ищем пользователя по email и 
      // если он есть, то проверяем пароль
      if (!user) {
        throw new NotFoundException('Пользователь не найден');// Если пользователь не найден, выбрасываем ошибку
      }
    const isMatch = await bcrypt.compare(password, user.password); // Сохраняем пароль в переменную
    // Сравниваем введенный пароль с хешированным паролем из базы данных
      if (!isMatch) { //если пользователь найден и пароль совпадает 
        return user;
      }
      throw new UnauthorizedException('Неправильный пароль'); // если нет, то выбрасываем ошибку
  }
  
  async login(user: any) {
    const payload = { email: user.email, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  }

