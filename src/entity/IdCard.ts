import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm"
import { User } from "./User"
@Entity({
  name: 'id_card'
})
export class IdCard {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: '50',
    comment: '身份证编号'
  })
  cardName: string

@JoinColumn()
@OneToOne(() => User, {
  cascade: true, // 级联
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
user: User
}
