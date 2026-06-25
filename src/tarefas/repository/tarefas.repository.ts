import { Injectable } from '@nestjs/common';
import { Tarefa } from "@prisma/client"; // Agora o import vai funcionar perfeitamente!
import { PrismaBaseRepository } from "src/common/repository/base.prisma.repository";
import { ITarefaReposytory } from "./ITarefa.repository";
import { PrismaService } from 'src/prisma/prisma.service'; // Adicionado o import que faltava

@Injectable()
export class PrismaTasksRepository 
  extends PrismaBaseRepository<Tarefa, 'tarefa'> 
  implements ITarefaReposytory
{
  constructor(prisma: PrismaService) {
    super(prisma, 'tarefa');
  }

  // Corrigido para buscar usando a propriedade correta do Prisma e o ID como número
  async findManyByUserId(userId: number): Promise<Tarefa[]> {
    return this.prisma.tarefa.findMany({
      where: { 
        user_id: userId
      },
    });
  }
}