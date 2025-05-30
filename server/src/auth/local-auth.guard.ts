
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}//
// после добавляю єтот класс в auth.module.ts в providers, чтобы он был доступен в контроллере 
//и прописіваю его в контроллере auth.controller.ts в декораторе @UseGuards(LocalAuthGuard)