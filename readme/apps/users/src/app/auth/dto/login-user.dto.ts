import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {

@ApiProperty({
  description: 'User uniq email',
  example: 'user@user.ru',
})
public  email:string;

@ApiProperty({
  description: 'User uniq password',
  example: '1357dfG',
})
public  password:string;

}
