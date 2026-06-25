import { Controller, Get, Post } from '@nestjs/common';
import { TarefasService } from './tarefas.service';

@Controller('tarefas')
export class TarefasController {
    constructor(private tarefasService: TarefasService){}

    @Get("all")
    getAll(){
        return this.tarefasService.listAll();
    }
}