import { Injectable } from '@nestjs/common'
import { TegInterface } from '@readme/shard-types'
import { BlogTegEntity } from './blog-teg.entity'
import { BlogTegRepository } from './blog-teg.repository'

const TEG_EXIST = 'This teg exist'

@Injectable()
export class BlogTegService {
    constructor(private readonly blogTegRepository: BlogTegRepository) {}

    public async createTeg(item: BlogTegEntity): Promise<TegInterface> {
        const existTeg = await this.blogTegRepository.findByTitle(item.title)
        if (existTeg) {
            throw new Error(TEG_EXIST)
        }
        return this.blogTegRepository.create(item)
    }

    public async deleteTeg(id: number): Promise<void> {
        this.blogTegRepository.destroy(id)
    }

    public async getTeg(id: number): Promise<TegInterface | null> {
        return this.blogTegRepository.findById(id)
    }

    public getAllTeg(): Promise<TegInterface[]> {
        return this.blogTegRepository.find()
    }

    public updateTeg(id: number, item: BlogTegEntity): Promise<TegInterface> {
        return this.blogTegRepository.update(id, item)
    }
}
