import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TarefaModulo } from './tarefas/tarefas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, TarefaModulo, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
