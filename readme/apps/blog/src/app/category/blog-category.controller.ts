import { Controller, Get, Param } from '@nestjs/common'
import { BlogCategoryService } from './blog-category.service'
import { BlogCategoryRdo } from './rdo/blog-category.rdo'
import { getDataToDto } from '@readme/core'

@Controller('categories')
export class BlogCategoryController {
    constructor(private readonly blogCategoryService: BlogCategoryService) {}

    @Get('/')
    async index() {
        const categories = await this.blogCategoryService.getAllCategory()
        return getDataToDto(BlogCategoryRdo, categories)
    }

    @Get('/:title')
    async show(@Param('title') title: string) {
        const category = await this.blogCategoryService.getCategory(title)
        return getDataToDto(BlogCategoryRdo, category)
    }
}
