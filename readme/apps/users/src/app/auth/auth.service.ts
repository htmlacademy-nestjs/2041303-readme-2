import { Injectable } from '@nestjs/common';
import { BlogUserMemoryRepository } from '../blog-user/blog-user-memory.repository';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './auth.constant';
import { CreateUserDto } from './dto/creat-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly blogUserMemoryRepository: BlogUserMemoryRepository
  ) {}

  async register (dto:CreateUserDto) {

    const {email,name,lastName,password}  = dto;

    const userBlog = {_id: '', registerDate: new Date, email,name,lastName,passwordHash:'', avatar:''};

    if(dto.avatar){
      userBlog.avatar = dto.avatar;
    }
    const existUser = await this.blogUserMemoryRepository.findByEmail(email);

    if(existUser){
      throw new Error(AUTH_USER_EXISTS)
    }

    const userEntity = await new BlogUserEntity(userBlog).setPassword(password);

    return this.blogUserMemoryRepository.create(userEntity);

  }

  async verifyUser (dto:LoginUserDto) {

    const {email, password} = dto;

    const existsUser = await this.blogUserMemoryRepository.findByEmail(email);

    if(! existsUser) {

      throw new Error (AUTH_USER_NOT_FOUND);
    }

    const blogUser = new BlogUserEntity(existsUser);

    if(! await blogUser.comparePassword(password)) {

      throw new Error (AUTH_USER_PASSWORD_WRONG)
    }

    return blogUser.toObject();

  }

  async getUserId(id:string){

    return this.blogUserMemoryRepository.findById(id);
  }
}
