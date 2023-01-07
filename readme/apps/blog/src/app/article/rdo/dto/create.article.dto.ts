import { CategoryInterface, TegInterface } from '@readme/shard-types'

export class CreateArticleDto {
    category!: CategoryInterface[]
    teg!: TegInterface[]
    articleStatus!: boolean
    title?: string
    link?: string
    preview?: string
    description?: string
    authorName?: string
}
