import { Expose } from 'class-transformer'

export class UpdateTegDto {
    @Expose()
    title!: string
}
