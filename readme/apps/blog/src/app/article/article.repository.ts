import { Injectable } from '@nestjs/common'
import { BlogDataInterface } from '@readme/shard-types'
import { PrismaService } from '../prisma/prisma.service'
import { ArticleEntity } from './article.entity'

Injectable()
export class ArticleRepository {
    constructor(private readonly prismaService: PrismaService) {}

    public async create(item: ArticleEntity): Promise<BlogDataInterface> {
        const entityDate = item.toObject()
        return this.prismaService.article.create({
            data: {
                ...entityDate,
                category: {
                    connect: [...item.category],
                },
                teg: {
                    connect: [...item.teg],
                },
            },
            include: {
                teg: true,
                category: true,
            },
        })
    }

    public async destroy(id: number): Promise<void> {
        this.prismaService.article.delete({
            where: {
                id,
            },
        })
    }

    public async findById(id: number): Promise<BlogDataInterface | null> {
        return this.prismaService.article.findFirst({
            where: { id },
            include: {
                teg: true,
                category: true,
            },
        })
    }

    public async findMany(): Promise<BlogDataInterface[]> {
        return this.prismaService.article.findMany({
            include: {
                teg: true,
                category: true,
            },
        })
    }

    public async update(
        id: number,
        item: BlogDataInterface
    ): Promise<BlogDataInterface> {
        return this.prismaService.article.update({
            where: { id },
            data: {
                updateAt: new Date(),
                articleStatus: item.articleStatus,
                title: item.title,
                link: item.link,
                preview: item.preview,
                description: item.description,
                authorName: item.authorName,
            },
            include: {
                teg: true,
                category: true,
            },
        })
    }
}
