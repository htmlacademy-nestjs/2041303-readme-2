import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    Post,
} from '@nestjs/common'
import { getDataToDto } from '@readme/core'
import { BlogTegEntity } from './blog-teg.entity'
import { BlogTegService } from './blog-teg.service'
import { CreateTegDto } from './dto/create-teg.dto'
import { UpdateTegDto } from './dto/update-teg.dto'
import { BlogTegRdo } from './rdo/blog-teg.rdo'

@Controller('teg')
export class BlogTegController {
    constructor(private readonly blogTegService: BlogTegService) {}

    @Get('/')
    async index() {
        const allTeg = await this.blogTegService.getAllTeg()
        return getDataToDto(BlogTegRdo, allTeg)
    }

    @Get('/:id')
    async show(@Param(':id') id: string) {
        const tegId = parseInt(id, 10)
        const teg = await this.blogTegService.getTeg(tegId)
        return getDataToDto(BlogTegRdo, teg)
    }

    @Post('/')
    async create(@Body() dto: CreateTegDto) {
        const teg = new BlogTegEntity(dto)
        const newTeg = this.blogTegService.createTeg(teg)
        return getDataToDto(BlogTegRdo, newTeg)
    }

    @Patch('/:id')
    async update(@Param(':id') id: string, @Body() dto: UpdateTegDto) {
        const idTeg = parseInt(id, 10)
        const updateTeg = await this.blogTegService.updateTeg(
            idTeg,
            new BlogTegEntity(dto)
        )
        return getDataToDto(BlogTegRdo, updateTeg)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('/:id') id: string) {
        const idTeg = parseInt(id, 10)
        this.blogTegService.deleteTeg(idTeg)
    }
}
