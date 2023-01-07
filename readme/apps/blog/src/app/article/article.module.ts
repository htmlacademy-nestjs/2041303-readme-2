import { Module } from '@nestjs/common'
import { BlogCategoryModule } from '../category/blog-category.module'
import { ArticleController } from './article.controller'
import { ArticleRepository } from './article.repository'
import { ArticleService } from './article.service'

@Module({
    imports: [BlogCategoryModule],
    controllers: [ArticleController],
    providers: [ArticleService, ArticleRepository],
})
export class ArticleModule {}
