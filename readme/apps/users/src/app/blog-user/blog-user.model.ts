import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { UserDataInterface } from '@readme/shard-types'

@Schema({
    collection: 'users',
})
export class BlogUserModel extends Document implements UserDataInterface {
    @Prop({
        required: true,
    })
    public _id!: string

    @Prop({
        required: true,
    })
    public registerDate!: Date

    @Prop({
        required: true,
    })
    public email!: string

    @Prop({
        required: true,
    })
    public name!: string

    @Prop({
        required: true,
    })
    public lastName!: string

    @Prop({
        required: true,
    })
    public passwordHash!: string

    @Prop()
    public avatar!: string
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel)
