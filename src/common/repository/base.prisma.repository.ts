import { PrismaService } from 'src/prisma/prisma.service';
import { IBaseRepository } from './base.repository.interface';

export abstract class PrismaBaseRepository<model, name extends string> implements IBaseRepository<model> {
  constructor(
    protected readonly prisma: PrismaService,
    private readonly modelName: name,
  ) {}

  protected get model() {
    return this.prisma[this.modelName as any];
  }

  async save(data: any): Promise<model> {
    if (data.id) {
      return this.model.update({
        where: { id: data.id },
        data,
      });
    }
    return this.model.create({ data });
  }

  async findById(id: string): Promise<model | null> {
    return this.model.findUnique({ where: { id } });
  }

  async findAll(): Promise<model[]> {
    return this.model.findMany();
  }

  async delete(id: string): Promise<void> {
    await this.model.delete({ where: { id } });
  }
}