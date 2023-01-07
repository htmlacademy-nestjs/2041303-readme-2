import { ArticleService } from './article.service'
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
import { rdoAll } from './rdo/rdo.all'
import { BlogCategory } from '@readme/shard-types'
import { CreateArticleDto } from './rdo/dto/create.article.dto'
import { ArticleEntity } from './article.entity'
import { UpdateArticleDto } from './rdo/dto/update.article.dto'

@Controller('posts')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get('/')
    async index() {
        const posts = await this.articleService.findAllArticle()
        const normalPosts = []
        for (const post of posts) {
            const category = post.category[0].title as BlogCategory
            normalPosts.push(getDataToDto(rdoAll[category], post))
        }
        return normalPosts
    }

    @Get('/:id')
    async show(@Param(':id') id: string) {
        const articleId = parseInt(id, 10)
        const article = await this.articleService.findArticle(articleId)
        if (article !== null) {
            const category = article.category[0].title as BlogCategory
            return getDataToDto(rdoAll[category], article)
        }
    }

    @Post('/')
    async create(@Body() dto: CreateArticleDto) {
        const article = new ArticleEntity(dto)
        return this.articleService.create(article)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async destroy(@Param(':id') id: string) {
        const articleId = parseInt(id, 10)
        this.articleService.deleteArticle(articleId)
    }

    @Patch('/:id')
    async update(id: string, dto: UpdateArticleDto) {
        const articleId = parseInt(id, 10)
        const article = await this.articleService.findArticle(articleId)
        if (article !== null) {
            const {
                title = '',
                link = '',
                preview = '',
                description = '',
                authorName = '',
            } = dto
            return this.articleService.updateArticle(articleId, {
                ...article,
                title,
                link,
                preview,
                description,
                authorName,
            })
        }
        throw new Error('Post not Found')
    }
}
