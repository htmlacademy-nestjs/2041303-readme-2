import { compare, genSalt, hash } from 'bcrypt'
import { UserDataInterface } from '@readme/shard-types'

const SALT_ROUND = 10

export class BlogUserEntity implements UserDataInterface {
    public _id!: string
    public registerDate!: Date
    public email!: string
    public name!: string
    public lastName!: string
    public passwordHash!: string
    public avatar!: string

    constructor(blogUser: UserDataInterface) {
        this.fillEntity(blogUser)
    }

    public toObject() {
        return { ...this }
    }

    public fillEntity(blogUser: UserDataInterface) {
        const {
            _id,
            registerDate,
            email,
            name,
            lastName,
            passwordHash,
            avatar,
        } = blogUser

        this._id = _id
        this.registerDate = registerDate
        this.email = email
        this.name = name
        this.lastName = lastName
        this.passwordHash = passwordHash
        this.avatar = avatar
    }

    public async setPassword(password: string): Promise<BlogUserEntity> {
        const salt = await genSalt(SALT_ROUND)
        this.passwordHash = await hash(password, salt)
        return this
    }

    public comparePassword(password: string): Promise<boolean> {
        return compare(password, this.passwordHash)
    }
}
