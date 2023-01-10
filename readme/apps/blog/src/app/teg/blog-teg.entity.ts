import { EntityInterface } from '@readme/core'
import { TegInterface } from '@readme/shard-types'

export class BlogTegEntity
    implements EntityInterface<BlogTegEntity, TegInterface>
{
    public id!: number
    public title!: string

    constructor(category: TegInterface) {
        this.fillEntity(category)
    }

    fillEntity(entity: TegInterface) {
        if (entity.id) {
            this.id = entity.id
        }

        this.title = entity.title
    }

    toObject(): BlogTegEntity {
        return { ...this }
    }
}
