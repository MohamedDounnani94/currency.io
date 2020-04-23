import { ExpenseType } from './budget.entity'
interface IBudget {
  id?: string,
  name: string,
  description: string,
  amount: number,
  expenseType: ExpenseType,
  transactionTime: Date,
  createdAt?: Date,
  updatedAt?: Date,
}

export default IBudget;