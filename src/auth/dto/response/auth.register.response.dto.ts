import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthRegiterResponseDto{
    id: number;
    nome: string;
    email: string;
}