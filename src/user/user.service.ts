import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
@Injectable()
export class UserService {
  @Inject(EventEmitter2)
  private eventEmitter: EventEmitter2;
  private count = 0;
  create(createUserDto: CreateUserDto) {
    console.log('emit user register', ++this.count);
    this.eventEmitter.emit('user.register', {
      username: createUserDto.username,
      email: createUserDto.email,
      count: this.count,
    });
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
