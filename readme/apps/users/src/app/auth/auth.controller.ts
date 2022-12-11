import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from './dto/create-user.dto'
import { getDataToDto } from '@readme/core'
import { UserRdo } from './rdo/user.rdo'
import { LoginUserDto } from './dto/login-user.dto'
import { LoggedUserRdo } from './rdo/logged-user.rdo'
import { ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'The user has been successfully created.',
    })
    @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
    async create(@Body() dto: CreateUserDto) {
        const { email, name, lastName, password } = dto
        const newUser = await this.authService.register(
            email,
            name,
            lastName,
            password
        )
        return getDataToDto(UserRdo, newUser)
    }

    @Post('login')
    @ApiResponse({
        type: LoggedUserRdo,
        status: HttpStatus.OK,
        description: 'The user successfully logged.',
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Password or login wrong',
    })
    async login(@Body() dto: LoginUserDto) {
        const verifyUser = this.authService.verifyUser(dto.email, dto.password)
        return getDataToDto(LoggedUserRdo, verifyUser)
    }

    @Get(':id')
    @ApiResponse({
        type: UserRdo,
        status: HttpStatus.OK,
        description: 'The user exist.',
    })
    @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
    async show(@Param('id') id: string) {
        const existsUser = await this.authService.getUserId(id)
        return getDataToDto(UserRdo, existsUser)
    }
}
