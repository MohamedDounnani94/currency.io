import { Entity, Column, Generated, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

export enum ExpenseType {
  INCOME = 'INCOME',
  EXIT = 'EXIT',
}

@Entity()
export class Budget {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('text')
  description: string;

  @Column('float')
  amount: number;

  @Column({
    type: 'enum',
    enum: ExpenseType,
    default: ExpenseType.INCOME
  })
  expense_type: ExpenseType;

  @Column('time')
  transaction_time: Date

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date
}