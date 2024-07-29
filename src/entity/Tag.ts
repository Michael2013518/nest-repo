import { Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm"
import { Article } from "./Article"
@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100
  })
  name: string

  @ManyToMany(() => Article, article => article.tags)
  articles: Article[]
}
