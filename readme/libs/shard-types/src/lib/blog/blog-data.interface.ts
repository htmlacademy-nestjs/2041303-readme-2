import { CategoryInterface } from './category.interface'
import { TegInterface } from './teg.interface'

export interface BlogDataInterface {
    id?: number
    createAt?: Date
    updateAt?: Date
    articleStatus: boolean
    category: CategoryInterface[]
    title?: string
    link?: string
    teg: TegInterface[]
    preview?: string
    description?: string
    authorName?: string
}
