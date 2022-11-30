import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class LoggedUserRdo {
    @ApiProperty({
        description: 'User uniq id',
        example: 'asdf-asdf13-ad1345',
    })
    @Expose({ name: '_id' })
    id!: string

    @ApiProperty({
        description: 'User uniq email',
        example: 'user@user.ru',
    })
    @Expose()
    email!: string

    @ApiProperty({
        description: 'User uniq token',
        example: '213daf1341234ewq',
    })
    @Expose()
    public accessToken!: string
}
