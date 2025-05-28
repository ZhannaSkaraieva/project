
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' }); // Используем email в качестве поля для аутентификации 
  }

  async validate(email: string, password: string){
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Неправильные учетные данные'); // Если пользователь не найден, выбрасываем исключение
    }
    return user;
  }
}
