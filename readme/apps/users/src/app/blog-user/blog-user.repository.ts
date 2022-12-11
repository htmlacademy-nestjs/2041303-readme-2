import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { UserDataInterface } from '@readme/shard-types'
import { Model } from 'mongoose'
import { BlogUserEntity } from './blog-user.entity'
import { BlogUserModel } from './blog-user.model'

Injectable()
export class BlogUserRepository {
    constructor(
        @InjectModel(BlogUserModel.name)
        private readonly blogUserModule: Model<BlogUserModel>
    ) {}

    public async create(createUser: BlogUserEntity): Promise<BlogUserModel> {
        const user = new this.blogUserModule(createUser)
        return user.save()
    }

    public async destroy(id: string): Promise<void> {
        this.blogUserModule.deleteOne({ id })
    }

    public async findById(id: string): Promise<UserDataInterface | null> {
        return this.blogUserModule.findOne({ id }).exec()
    }

    public async findByEmail(email: string): Promise<UserDataInterface | null> {
        return this.blogUserModule.findOne({ email }).exec()
    }

    public async update(
        id: string,
        item: BlogUserEntity
    ): Promise<UserDataInterface | null> {
        return this.blogUserModule
            .findByIdAndUpdate(id, item.toObject(), {
                new: true,
            })
            .exec()
    }
}
