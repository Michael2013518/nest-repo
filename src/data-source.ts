import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { authPlugins } from 'mysql2';
import { IdCard} from './entity/IdCard' // User -> IdCard 一对一
import { Department} from './entity/Department'
import { Employee} from './entity/Employee' // Department -> Employee 一对多
import { Article} from './entity/Article'
import { Tag } from './entity/Tag' // Article -> Tag 多对多

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3360,
    username: "root",
    password: "root",
    database: "typeorm_test",
    synchronize: true,
    logging: true,
    entities: [User,IdCard,Department,Employee,Article, Tag],
    migrations: [],
    subscribers: [],
    poolSize:10,
    connectorPackage: 'mysql2',
    extra: {
        authPlugins: 'sha256_password'
    }
})
