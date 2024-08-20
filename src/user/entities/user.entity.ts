import { Exclude } from 'class-transformer';
export class User {
  id: string;
  username: string;
  email: string;
  @Exclude()
  password: string;
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}

type res = Partial<User>;
