import { Module } from '@nestjs/common'
import { BlogTegController } from './blog-teg.controller'
import { BlogTegRepository } from './blog-teg.repository'
import { BlogTegService } from './blog-teg.service'

@Module({
    imports: [],
    controllers: [BlogTegController],
    providers: [BlogTegRepository, BlogTegService],
    exports: [BlogTegRepository],
})
export class BlogTegModule {}
