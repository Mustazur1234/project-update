import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersModule } from '../users/user.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';



@Module({
  controllers: [
    AuthController
  ],
  imports: [
    PassportModule.register({ DefaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: "dfyherreu",
      signOptions: { expiresIn: '360s' },
    }),
    UsersModule,
  ],
  providers: [AuthService, JwtStrategy, ],
  exports: [AuthService, PassportModule],
})
export class AuthModule{}
