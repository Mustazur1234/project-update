import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { NoticeModule } from './notice/notice.module';
import { UsersModule } from './users/user.module';


@Module({
  imports: [DatabaseModule, UsersModule, NoticeModule],
  controllers: [],
  providers: [],
})

export class ApiModule {}
 