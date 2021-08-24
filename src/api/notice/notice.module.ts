import { Module } from '@nestjs/common';
import { NoticeController } from './controllers/notice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticeRepository } from './repositories/notice.repository';
import { NoticeService } from './services/notice.service';

@Module({
  imports: [TypeOrmModule.forFeature([NoticeRepository])],
  providers: [NoticeService],
  controllers: [NoticeController],
})
export class NoticeModule {}