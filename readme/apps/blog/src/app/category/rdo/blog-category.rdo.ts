import { Expose } from 'class-transformer'

export class BlogCategoryRdo {
    @Expose()
    public id!: string

    @Expose()
    public title!: string
}
