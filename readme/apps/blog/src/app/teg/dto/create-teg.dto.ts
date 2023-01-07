import { Expose } from 'class-transformer'

export class CreateTegDto {
    @Expose()
    title!: string
}
