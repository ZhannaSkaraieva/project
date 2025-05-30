
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {// Используем стратегию Passport для локальной аутентификации
  constructor(private authService: AuthService) {// Внедряем AuthService для проверки пользователя
    super({ usernameField: 'email' }); // Используем email в качестве поля для аутентификации 
  }

  async validate(email: string, password: string){// Метод validate вызывается Passport при аутентификации пользователя
    // Он получает email и пароль из запроса и передает их в AuthService для проверки
    // Если пользователь найден и пароль совпадает, возвращает пользователя
    // Если пользователь не найден или пароль не совпадает, выбрасывает исключение UnauthorizedException
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Неправильные учетные данные'); // Если пользователь не найден, выбрасываем исключение
    }
    return user;
  }
}
