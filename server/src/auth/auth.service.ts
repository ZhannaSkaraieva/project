import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service'; // Импортируем UsersService
import * as bcrypt from 'bcrypt';



@Injectable()
export class AuthService {
    //подключаю или инициализирую сервисы, которые будут использоваться в AuthService
  constructor(private userService: UserService) { }//теперь это доступ к сервису UserService

  async validateUser(email: string, password: string): Promise<any> { // Функция для валидации пользователя в которую передаю почту и пароль

      const user = await this.userService.findOne(email); // Ищем пользователя по email и 
      // если он есть, то проверяем пароль
      if (!user) {
        throw new Error('User not found'); // Если пользователь не найден, выбрасываем ошибку
      }
    const isMatch = await bcrypt.compare(password, user.password); // Сохраняем пароль в переменную
    // Сравниваем введенный пароль с хешированным паролем из базы данных
      if (user && isMatch) { //если пользователь найден и пароль совпадает 
        return user;
      }
      throw new Error('Invalid password or user'); // если нет, то выбрасываем ошибку
    }
  }

