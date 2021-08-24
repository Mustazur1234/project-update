import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { request } from 'express';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { CreateNoticeReqDto } from '../dto/request/create-notice-request.dto';
import { UpdateNoticeRequestDto } from '../dto/request/update-notice.request.dto';
import { NoticeService } from '../services/notice.service';

@ApiTags('Notice')
@Controller('notices')
export class NoticeController {
    constructor(private noticeService: NoticeService) {

    }
    
    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() dto: CreateNoticeReqDto, @Req() request: any) {
        return this.noticeService.createNotice(dto, request.institute);
    }

    @Patch(':institute_id')
    @UseGuards(JwtAuthGuard)
    update(@Param('institute_id') instituteId: number, @Body() dto: UpdateNoticeRequestDto) {
        return this.noticeService.updateNotice(instituteId, dto);
    }
    @Get()
    @UseGuards(JwtAuthGuard)
    getAll(@Req() req: any) {
        return this.noticeService.getAllNotice(req.institute);
    }
    @Get(':institute_id')
    @UseGuards(JwtAuthGuard)
    getOne(@Param('institute_id') instituteId: number, @Req() req: any) {
        return this.noticeService.getOneNotice(instituteId, req.user);
    }

}