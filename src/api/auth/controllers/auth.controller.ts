import { Body, Controller, Post,Get, Request, UseGuards} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from '../services/auth.service';
import { JwtAuthGuard } from "src/common/guards/jwt-auth.guard";
import { UserRegisterRequestDto } from "../dto/request/user-resgister-request.dto";
import { UserLoginRequestDto } from "../dto/request/user-login.request.dto";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
  register(@Body() dto: UserRegisterRequestDto) {
    return this.authService.registerUser(dto);
  }

  @Post('login')
  login(@Body() dto: UserLoginRequestDto) {
    return this.authService.loginUser(dto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  userDetails(@Request() request: any) {
    return request.user;
   
  }



}