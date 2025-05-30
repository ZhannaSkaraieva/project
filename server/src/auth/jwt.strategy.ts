
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {// Используем стратегию Passport для JWT аутентификации
  constructor() {//
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {// Метод validate вызывается Passport при аутентификации пользователя с помощью JWT
    // Он получает payload из JWT и возвращает пользователя
    return { id: payload.id, email: payload.email };
  }
}
