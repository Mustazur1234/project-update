import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoticeReqDto } from '../dto/request/create-notice-request.dto';
import { UpdateNoticeRequestDto } from '../dto/request/update-notice.request.dto';
import { NoticeRepository } from '../repositories/notice.repository';
import { Institute } from '../../users/entities/user.entity';

@Injectable()
export class NoticeService {
    constructor(private repository: NoticeRepository) { }


    async createNotice(dto: CreateNoticeReqDto, institute: Institute) {
        let notice = await this.repository.create({ ...dto, institute });
        return this.repository.save(notice);
    }

    async updateNotice(instituteId: number, dto: UpdateNoticeRequestDto) {
        let oldNotice = await this.repository.findOne({ where: { institute_id: instituteId } });
        return this.repository.save({ ...oldNotice, ...dto });
    }
    async getOneNotice(instituteId: number, user: Institute) {
        let notice = await this.repository.findOne({ where: { institute_id: instituteId} });

        if (!notice) {
            throw new NotFoundException(`notice with id ${instituteId} not Found`);
        }
        return notice;
    }
    async getAllNotice(user: Institute) {
        return this.repository.find({ where: { user: { institute_id: user.institute_id } } });
    }


}