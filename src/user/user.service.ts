import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'michael',
      password: '123456',
    },
    {
      userId: 2,
      username: 'lisa',
      password: '123456',
    },
  ];
  findOne(username: string) {
    return this.users.find((user) => user.username == username);
  }
}
