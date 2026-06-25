import { Tarefa } from "src/generated/prisma";
import { IBaseRepository } from "src/common/repository/base.repository.interface";

export abstract class ITarefaReposytory extends IBaseRepository<Tarefa> {
  // Ajustado o userId para number, condizente com o Int do banco de dados
  abstract findManyByUserId(userId: number): Promise<Tarefa[]>;
}