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

  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string;

  @Column('float')
  amount: number;

  @Column({
    type: 'enum',
    enum: ExpenseType,
    default: ExpenseType.INCOME,
    name: 'expense_type'
  })
  expenseType: ExpenseType;

  @Column({
    type: 'time',
    name: 'transaction_time'
  })
  transactionTime: Date

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at'
  })
  createdAt: Date

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at'
  })
  updatedAt: Date
}