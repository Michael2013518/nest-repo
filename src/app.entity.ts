import { PrimaryColumn, Column, Entity } from 'typeorm';

// 定义实体
@Entity()
export class App {
  @PrimaryColumn()
  id: number;

  @Column({
    length: 10,
  })
  name: string;

  @Column({
    length: 30,
  })
  description: string;
}
