interface MongoConnectInfo {
    username: string | undefined
    password: string | undefined
    host: string | undefined
    port: number | undefined
    databaseName: string | undefined
    authDatabase: string | undefined
}

export function getMongoConnectionString({
    username,
    password,
    host,
    port,
    databaseName,
    authDatabase,
}: MongoConnectInfo): string {
    return `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`
}
