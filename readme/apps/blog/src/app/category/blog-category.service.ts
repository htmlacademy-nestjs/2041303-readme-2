import { Injectable } from '@nestjs/common'
import { CategoryInterface } from '@readme/shard-types'
import { BlogCategoryRepository } from './blog-category.repository'

Injectable()
export class BlogCategoryService {
    constructor(
        private readonly blogCategoryRepository: BlogCategoryRepository
    ) {}

    public async getCategory(title: string): Promise<CategoryInterface | null> {
        return this.blogCategoryRepository.findByTitle(title)
    }

    public async getAllCategory(): Promise<CategoryInterface[] | null> {
        return this.blogCategoryRepository.findAll()
    }
}
