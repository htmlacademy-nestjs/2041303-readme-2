import { Expose } from 'class-transformer'

export class BlogTegRdo {
    @Expose()
    public id!: string

    @Expose()
    public title!: string
}
