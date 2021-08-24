// import { Institute } from 'src/api/users/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Notice } from '../entities/notice.entity';

@EntityRepository(Notice)
export class NoticeRepository extends Repository<Notice> {}