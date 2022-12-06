import { Module } from '@nestjs/common'
import { BlogUserModule } from './blog-user/blog-user.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import databaseConfig from './config/database.config'
import envSchema from './env.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { getMongoDbConfig } from './config/mongoose-db-config'

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            isGlobal: true,
            envFilePath: 'environments/user.env',
            load: [databaseConfig],
            validationSchema: envSchema,
        }),
        MongooseModule.forRootAsync(getMongoDbConfig()),
        BlogUserModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
