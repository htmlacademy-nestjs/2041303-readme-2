import { CategoryInterface, TegInterface } from '@readme/shard-types'
import { Expose } from 'class-transformer'

export class RdoPhoto {
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
    teg!: TegInterface[]
}
