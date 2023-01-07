import { EntityInterface } from '@readme/core'
import {
    BlogDataInterface,
    CategoryInterface,
    TegInterface,
} from '@readme/shard-types'

export class ArticleEntity
    implements EntityInterface<ArticleEntity, BlogDataInterface>
{
    constructor(article: BlogDataInterface) {
        this.fillEntity(article)
    }
    id?: number
    createAt!: Date
    updateAt!: Date
    articleStatus!: boolean
    category!: CategoryInterface[]
    title!: string
    link!: string
    teg!: TegInterface[]
    preview!: string
    description!: string
    authorName!: string

    fillEntity({
        createAt = new Date(),
        updateAt = new Date(),
        articleStatus,
        category,
        title = '',
        link = '',
        teg,
        preview = '',
        description = '',
        authorName = '',
    }: BlogDataInterface) {
        this.createAt = createAt
        this.updateAt = updateAt
        this.articleStatus = articleStatus
        this.category = [...category]
        this.title = title
        this.link = link
        this.teg = [...teg]
        this.preview = preview
        this.description = description
        this.authorName = authorName
    }

    public toObject(): ArticleEntity {
        return {
            ...this,
            categories: this.category.map(({ id }) => ({ id })),
            teg: this.teg.map(({ id }) => ({ id })),
        }
    }
}
