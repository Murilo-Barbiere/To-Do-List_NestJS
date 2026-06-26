import { Body, Controller, Post } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { AuthRegiterRequestDto } from "./dto/request/auth.register.request.dto";
import { AuthRegiterResponseDto } from "./dto/response/auth.register.response.dto";

@Controller("auth")
export class AuthController{
    constructor(private authService: AuthService){}

    @Post("register")
    async register(@Body() authRegiterRequestDto: AuthRegiterRequestDto): Promise<AuthRegiterResponseDto>{
        return await this.authService.register(authRegiterRequestDto);
    }
}