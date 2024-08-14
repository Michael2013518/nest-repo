import { Injectable } from '@nestjs/common';

const users = [
  {
    username: 'Michael2013518',
    githubId: '3632321',
    email: 'zdong@gmail.com',
    hobbies: ['sleep', 'writting'],
  },
  {
    username: 'lisa',
    email: 'michael9527@gmail.com',
    hobbies: ['swimming'],
  },
];

@Injectable()
export class AppService {
  findUserByGihubId(githubId: string) {
    return users.find((user) => user.githubId === githubId);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
