import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstituteRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([InstituteRepository])],
  providers: [UserService],
  exports: [UserService],
  controllers:[]
})
export class UsersModule {}