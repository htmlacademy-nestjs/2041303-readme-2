import { BlogCategory } from './blog-category.enum'
import { BlogStatus } from './blog-status.enum'

export interface BlockDataInterface {
    blogStatus: BlogStatus
    category: BlogCategory
    title?: string
    link?: string
    teg?: string
    preview?: string
    description?: string
    authorId?: string
    imageId?: string
    commentsId?: string
}
