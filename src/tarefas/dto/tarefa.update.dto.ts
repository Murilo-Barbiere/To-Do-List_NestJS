import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PrioridadeTarefa } from 'generated/prisma/enums';

export class TarefaUpdataDto {
    @IsString()
    @IsOptional()
    titulo!: string;

    @IsBoolean()
    @IsOptional()
    realizada!: boolean;

    @IsEnum(PrioridadeTarefa, {message:"Valores permitidos: URGENTE, ALTA, MEDIA, BAIXA"})
    @IsNotEmpty()
    prioridadeTarefa!: PrioridadeTarefa;
}