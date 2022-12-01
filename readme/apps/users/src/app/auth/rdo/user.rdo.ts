import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class UserRdo {
    @ApiProperty({
        description: 'User uniq id',
        example: 'asdf-asdf13-ad1345',
    })
    @Expose({ name: '_id' })
    public id!: string

    @ApiProperty({
        description: 'User date register',
        example: '20-10-2022',
    })
    @Expose()
    public registerDate!: Date

    @ApiProperty({
        description: 'User uniq email',
        example: 'user@user.ru',
    })
    @Expose()
    public email!: string

    @ApiProperty({
        description: 'User name',
        example: 'Oleg',
    })
    @Expose()
    public name!: string

    @ApiProperty({
        description: 'User last name',
        example: 'Petrov',
    })
    @Expose()
    public lastName!: string

    @ApiProperty({
        description: 'User avatar image',
        example: 'img/avatar.jpg',
    })
    @Expose()
    public avatar!: string
}
