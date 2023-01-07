import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CategoryInterface } from '@readme/shard-types'

Injectable()
export class BlogCategoryRepository {
    constructor(public readonly prisma: PrismaService) {}

    public findByTitle(title: string): Promise<CategoryInterface | null> {
        return this.prisma.category.findFirst({
            where: {
                title,
            },
        })
    }

    public findAll(): Promise<CategoryInterface[] | null> {
        return this.prisma.category.findMany()
    }
}
