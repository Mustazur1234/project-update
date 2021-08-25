import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { AuthModule } from './auth/auth.module';
import { NoticeModule } from './notice/notice.module';
import { UserService } from './users/services/user.service';
import { UsersModule } from './users/user.module';



@Module({
  imports: [DatabaseModule, UsersModule, NoticeModule, AuthModule],
  providers: []
})

export class ApiModule {}
 