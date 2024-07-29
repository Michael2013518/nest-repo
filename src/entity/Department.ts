import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm"
import { Employee } from "./Employee"
@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50
  })
  name: string

  @OneToMany(() => Employee, employee => employee.department, {
    cascade: true
  })
  employees: Employee[]

}
