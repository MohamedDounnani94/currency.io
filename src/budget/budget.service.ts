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

  async create(human: IBudget): Promise<string> {
    return 'ciao'
  }
  async findAll(): Promise <Budget[]> {
    return this.budgetsRepository.find()
  }

  findOneById(id: number): Promise <Budget> {
    return this.budgetsRepository.findOne(id)
  }

  async deleteOneById(id: number): Promise<string> {
    await this.budgetsRepository.delete(id)
    return `resource: ${id} successfully deleted`
  }

  async updateById(id: number, human): Promise<Budget> {
    await this.budgetsRepository.update(id, human)
    return this.budgetsRepository.findOne(id)
  }

}