import bcrypt from 'bcrypt';

import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthRegiterRequestDto } from "./dto/request/auth.register.request.dto";
import { AuthRegiterResponseDto } from './dto/response/auth.register.response.dto';
import { response } from 'express';

@Injectable()
export class AuthService{
    constructor(private prismaService: PrismaService){}

    async register(authRegiterRequestDto: AuthRegiterRequestDto): Promise<AuthRegiterResponseDto>{
        const userFlag = await this.prismaService.user.findUnique({
            where: {
                email: authRegiterRequestDto.email,
            },
        })

        if(userFlag){
            throw new NotFoundException("Usuário já registrado");
        }

        const senhaHash = await bcrypt.hash(authRegiterRequestDto.senha, 10);

        const user = await this.prismaService.user.create({
            data: {
                name: authRegiterRequestDto.nome,
                email: authRegiterRequestDto.email,
                senha: senhaHash
            },
        });

        return {
            id: user.id,
            nome: user.name,
            email: user.email
        }
    }

    async login(authResquestDto: AuthRegiterRequestDto){
        const user = await this.prismaService.user.findUnique({
            where: {
                email: authResquestDto.email,
            },
        });

        if(!user){
            throw new NotFoundException("Usuário não encontrado")
        }
    }

}