import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRegisterRequestDto } from '../dto/request/user-resgister-request.dto';
import { hash, compare } from 'bcryptjs';
import { UserService } from '../../users/services/user.service';
import { Institute } from '../../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserLoginRequestDto } from '../dto/request/user-login.request.dto';
@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async createApiToken(user: Institute) {
    return this.jwtService.sign({ user_id: user.institute_id });
  }

  async registerUser(dto: UserRegisterRequestDto) {
    let { email, password } = dto;
    password = await hash(password, 10);
    let createdUser = await this.userService.createUser({ email, password });
    let apiToken = await this.createApiToken(createdUser);
    return {
      api_token: apiToken,
    };
  }

  async loginUser(dto: UserLoginRequestDto) {
    let { email, password } = dto;
    let user = await this.userService.findUserByEmail(email);
    let isPassMatch = await compare(password, user.password);
    if (!isPassMatch) {
      throw new UnauthorizedException('Wrong Password');
    }
    let apiToken = await this.createApiToken(user);
    return {
      api_token: apiToken,
    };
  }

  async validateToken(token: string) {
    return this.jwtService.verifyAsync(token);
  }

  async getUser(noticeId: number) {
    let user = await this.userService.findUserById(noticeId);
    return user;
  }
}