import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRegisterRequestDto } from '../../auth/dto/request/user-resgister-request.dto';
import { Institute } from '../entities/user.entity';
import { InstituteRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  updateNotice(instituteId: number, dto: any) {
      throw new Error('Method not implemented.');
  }
  getOne(instituteId: number, user: any) {
      throw new Error('Method not implemented.');
  }
  constructor(private repository: InstituteRepository) {}

  async createUser(dto: UserRegisterRequestDto) {
    let newUser = await this.repository.create(dto);
    return this.repository.save(newUser);
  }

  async findUserByEmail(email: string): Promise<Institute> {
    let institute = await this.repository.findOne({ where: { email } });
    if (!institute) {
      throw new NotFoundException('user is wrong');
    }
    return institute;
  }

  async findUserById(noticeId: number): Promise<Institute> {
    let institute = await this.repository.findOne({ where: { institute_id: noticeId } });
    if (!institute) {
      throw new NotFoundException('user is wrong');
    }
    return institute;
  }
}