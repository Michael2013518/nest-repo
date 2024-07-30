import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    type: 'text',
  })
  content: string;

  @Column({
    length: 30,
  })
  tags: string;

  @CreateDateColumn() // 自动生成创建时间
  createDate: Date;

  @UpdateDateColumn() // 自动生成更新时间
  updateDate: Date;
}
