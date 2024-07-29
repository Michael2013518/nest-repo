import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm"
import {Tag} from "./Tag"
@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 1000,
    comment: '文章标题'
  })
  title: string

  @Column({ 
    type: 'text',
    comment: '文章内容'
  }) 
  content: string

  @JoinTable({
    name: 'article_tags', // 中间表名称
  })
  @ManyToMany(() => Tag, (tag) => tag.articles)
  tags: Tag[] // 多对多关系
}
