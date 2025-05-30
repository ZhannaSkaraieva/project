import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

//http://localhost:3000/api/auth
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard) // Используем AuthGuard для понимания можем ли мы войти в систему. он обращается в 
  // LocalStrategy, которая проверяет пользователя по email и паролю затем возвращает его, 
  // если все верно и в userService есть такой пользователь
  @Post('login') // http://localhost:3000/api/auth/login
  async login(@Request() req) {
    return this.authService.login(req.user);;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')// http://localhost:3000/api/auth/profile
  // Этот метод защищен JwtAuthGuard, который проверяет JWT токен
  // и если он валиден, то возвращает профиль пользователя
  getProfile(@Request() req) {
    return req.user;// Возвращаем пользователя из запроса, который был добавлен JwtAuthGuard
  }
}
