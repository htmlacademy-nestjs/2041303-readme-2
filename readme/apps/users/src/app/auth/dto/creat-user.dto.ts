import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
@ApiProperty({
  description: 'User uniq email',
  example: 'user@user.ru',
})
public  email:string;

@ApiProperty({
  description: 'User name',
  example: 'Voloda',
})
public  name:string;

@ApiProperty({
  description: 'User LastName',
  example: 'Petrov',
})
public  lastName:string;

@ApiProperty({
  description: 'User uniq password',
  example: '1345fgH',
})
public  password:string;

@ApiProperty({
  description: 'User avatar',
  example: '/img/avatar.jpg',
})
public  avatar?:string
}
