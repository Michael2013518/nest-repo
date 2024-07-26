import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  name: 'test'
})
export class Test {
  @PrimaryGeneratedColumn({
    comment: '这是一个自增id'
  })
  id: number

  @Column({
    name: 'test_name',
    type: 'text',
    comment: '这是一个测试字段'
  })
  name: string

  @Column({
    unique: true,
    nullable: false,
    length: 10,
    type: 'varchar',
    default: 'bbb'
})
des: string

@Column({
    type: 'double',
})
num: number
}