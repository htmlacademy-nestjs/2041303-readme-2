import { Injectable } from '@nestjs/common'
import { BlogDataInterface } from '@readme/shard-types'
import { BlogCategoryRepository } from '../category/blog-category.repository'
import { ArticleEntity } from './article.entity'
import { ArticleRepository } from './article.repository'

Injectable()
export class ArticleService {
    constructor(
        private readonly articleRepository: ArticleRepository,
        private readonly categoryRepository: BlogCategoryRepository
    ) {}

    public async create(item: ArticleEntity): Promise<BlogDataInterface> {
        const category = this.categoryRepository.findByTitle(
            item.category[0].title
        )
        if (category !== null) {
            return this.articleRepository.create(item)
        }

        throw new Error('Category no fund')
    }

    public async deleteArticle(id: number): Promise<void> {
        this.articleRepository.destroy(id)
    }

    public findArticle(id: number): Promise<BlogDataInterface | null> {
        return this.articleRepository.findById(id)
    }

    public findAllArticle(): Promise<BlogDataInterface[]> {
        return this.articleRepository.findMany()
    }

    public updateArticle(
        id: number,
        item: BlogDataInterface
    ): Promise<BlogDataInterface> {
        return this.articleRepository.update(id, item)
    }
}
