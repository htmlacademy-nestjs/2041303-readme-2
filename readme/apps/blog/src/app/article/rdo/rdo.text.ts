import { CategoryInterface, TegInterface } from '@readme/shard-types'
import { Expose } from 'class-transformer'

export class RdoText {
    @Expose()
    id!: string

    @Expose()
    createAt!: Date

    @Expose()
    updateAt!: Date

    @Expose()
    articleStatus!: boolean

    @Expose()
    category!: CategoryInterface[]

    @Expose()
    title!: string

    @Expose()
    teg!: TegInterface[]

    @Expose()
    preview!: string

    @Expose()
    description!: string
}
