import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { authPlugins } from "mysql2"
import {Test} from './entity/Test'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3360,
    username: "root",
    password: "root",
    database: "practice",
    synchronize: true,
    logging: true,
    entities: [User,Test],
    migrations: [],
    subscribers: [],
    poolSize: 10,
    connectorPackage: "mysql2",
    extra: {
        authPlugins: 'sha256_password'
    }
})
