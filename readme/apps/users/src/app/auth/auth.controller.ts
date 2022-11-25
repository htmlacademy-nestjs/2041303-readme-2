import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/creat-user.dto';
import {getDataToDto} from 'libs/core/src/index';
import { UserRdo } from './rdo/user.rdo';
import { LoginUserDto } from './dto/login-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) {}

@Post('register')
async create(@Body() dto:CreateUserDto) {
const newUser = await this.authService.register(dto);
return getDataToDto(UserRdo, newUser);
}

@Post('login')
async login(@Body() dto:LoginUserDto) {
  const verifyUser = this.authService.verifyUser(dto);
  return getDataToDto(LoggedUserRdo, verifyUser);
}

@Get(':id')
async show(@Param('id') id:string){
  const existsUser = await this.authService.getUserId(id);
  return getDataToDto(UserRdo, existsUser);
}
}
