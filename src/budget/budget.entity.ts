import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @Column('real')
  amount: number;

  @Column('text')
  type: string;

  @Column('text')
  expenseType: string;
}