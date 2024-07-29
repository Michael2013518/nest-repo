import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import { User} from './user/entities/user.entity'
@Module({
  imports: [TypeOrmModule.forRoot({    
    type: 'mysql',
    host: 'localhost',
    port: 3360,
    username: 'root',
    password: 'root',
    database: 'typeorm_test',
    entities: [User],
    synchronize: true,  
    logging: true,
    poolSize: 10,
    connectorPackage: 'mysql2',
    extra: {
      authPlugin: 'sha256_password' 
    }
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
