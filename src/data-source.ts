import { DataSource } from 'typeorm';
import { City } from './city/entities/city.entity';
import { Article } from './article/entities/article.entity';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3360,
  username: 'root',
  password: 'root',
  database: 'tree_test',
  synchronize: false,
  logging: true,
  entities: [City, Article],
  poolSize: 10,
  migrations: ['src/migration/**.ts'],
  connectorPackage: 'mysql2',
  extra: {
    authPlugin: 'sha256_password',
  },
});
