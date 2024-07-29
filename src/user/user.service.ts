import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectEntityManager, InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { EntityManager, Repository, DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectEntityManager()
  private manager: EntityManager;

  /**
   * user.module中import TypeOrmModule.forFeature()，并且传入User实体类
   */
  
  @InjectRepository(User)
  private userRepository: Repository<User>

  @InjectDataSource()
  private dataSource: DataSource;
  
  create(createUserDto: CreateUserDto) {
    //this.manager.getRepository(User).save(createUserDto);
    //this.userRepository.save(createUserDto);
    this.dataSource.getRepository(User).save(createUserDto);
    this.manager.save(User,createUserDto);
  }

  findAll() {
    return this.manager.find(User)
  }

  findOne(id: number) {
    return this.manager.findOne(User, {
      where: { id },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.manager.save(User, {
      id,
      ...updateUserDto,
    })
  }

  remove(id: number) {
    this.manager.delete(User, id);
  }
}
