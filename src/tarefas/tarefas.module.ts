import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { TarefasService } from "./tarefas.service";
import { ITarefaReposytory } from "./repository/ITarefa.repository";
import { PrismaTasksRepository } from "./repository/tarefas.repository";

@Module({
  imports: [PrismaModule],
  controllers: [TaskController],
  providers: [
    TarefasService,
    {
      provide: ITarefaReposytory, // Token da Classe Abstrata
      useClass: PrismaTasksRepository, // Implementação real do Prisma
    },
  ],
  exports: [PrismaTasksRepository],
})
export class TasksModule {}