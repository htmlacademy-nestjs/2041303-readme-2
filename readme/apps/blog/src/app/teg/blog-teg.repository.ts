import { Injectable } from '@nestjs/common'
import { TegInterface } from '@readme/shard-types'
import { BlogTegEntity } from './blog-teg.entity'
import { PrismaService } from '../prisma/prisma.service'

Injectable()
export class BlogTegRepository {
    constructor(private readonly prisma: PrismaService) {}

    public async create(item: BlogTegEntity): Promise<TegInterface> {
        return this.prisma.tegCategory.create({
            data: { ...item.toObject() },
        })
    }

    public async destroy(id: number): Promise<void> {
        await this.prisma.tegCategory.delete({
            where: {
                id,
            },
        })
    }

    public findById(id: number): Promise<TegInterface | null> {
        return this.prisma.tegCategory.findFirst({
            where: {
                id,
            },
        })
    }

    public findByTitle(title: string): Promise<TegInterface | null> {
        return this.prisma.tegCategory.findFirst({
            where: {
                title,
            },
        })
    }

    public find(ids: number[] = []): Promise<TegInterface[]> {
        return this.prisma.tegCategory.findMany({
            where: {
                id: {
                    in: ids.length > 0 ? ids : undefined,
                },
            },
        })
    }

    public update(id: number, item: BlogTegEntity): Promise<TegInterface> {
        return this.prisma.tegCategory.update({
            where: {
                id,
            },
            data: { ...item.toObject(), id },
        })
    }
}
