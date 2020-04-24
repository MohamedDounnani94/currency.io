import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Budget } from './budget.entity'
import IBudget from './budget.interface'

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(Budget)
    private budgetsRepository: Repository<Budget>,
  ) {}

  async create(budget: IBudget): Promise<Budget> {
    return this.budgetsRepository.save(budget)
  }
  async findAll(): Promise <Budget[]> {
    return this.budgetsRepository.find()
  }

  findOneById(id: string): Promise <Budget> {
    return this.budgetsRepository.findOne(id)
  }

  async deleteOneById(id: string): Promise<string> {
    await this.budgetsRepository.delete(id)
    return `resource: ${id} successfully deleted`
  }
  human
  async updateById(id: string, budget): Promise<Budget> {
    await this.budgetsRepository.update(id, budget)
    return this.budgetsRepository.findOne(id)
  }

}