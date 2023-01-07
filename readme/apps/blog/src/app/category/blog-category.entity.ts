import { EntityInterface } from '@readme/core'
import { CategoryInterface } from '@readme/shard-types'

export class BlogCategoryEntity
    implements EntityInterface<BlogCategoryEntity, CategoryInterface>
{
    public id!: number
    public title!: string

    constructor(category: CategoryInterface) {
        this.fillEntity(category)
    }

    fillEntity(entity: CategoryInterface) {
        this.id = entity.id
        this.title = entity.title
    }

    toObject(): BlogCategoryEntity {
        return { ...this }
    }
}
