import { Module } from '@nestjs/common'
import { ArticleModule } from './article/article.module'
import { BlogCategoryModule } from './category/blog-category.module'
import { PrismaModule } from './prisma/prisma.module'
import { BlogTegModule } from './teg/blog-teg.module'

@Module({
    imports: [PrismaModule, BlogCategoryModule, BlogTegModule, ArticleModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
