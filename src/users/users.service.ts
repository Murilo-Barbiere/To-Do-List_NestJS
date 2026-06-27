import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';
import { AuthRegiterRequestDto } from 'src/auth/dto/request/auth.register.request.dto';

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService){}

    async retornaUserAuthId(id: number, idUserLogado: number): Promise<UserDto>{
        const userDto: UserDto = await this.prismaService.user.findUniqueOrThrow({
            where: {
                id,
            },
            select:{
                id: true,
                name: true,
                email: true,
            },
        });

        if(!(id == idUserLogado)) throw new UnauthorizedException();

        return userDto;
    }

    async saveUser(userDto: AuthRegiterRequestDto, senhaHash: string): Promise<UserDto>{
        return await this.prismaService.user.create({
            data:{
                name: userDto.name,
                email: userDto.email,
                senha: senhaHash,
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
    }

}
