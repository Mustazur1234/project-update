
import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { CreateNoticeReqDto } from 'src/api/notice/dto/request/create-notice-request.dto';
import { UpdateNoticeRequestDto } from 'src/api/notice/dto/request/update-notice.request.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { UserService } from "../services/user.service";


@Controller('institute')
export class InstituteController {
    noticeService: any;
    constructor(private instituteService: UserService) {

    }

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() dto: CreateNoticeReqDto, @Req() request: any) {
        return this.noticeService.createNotice(dto, request.institute);
    }

    @Patch(':institute_id')
    @UseGuards(JwtAuthGuard)
    update(@Param('institute_id') instituteId: number, @Body() dto: UpdateNoticeRequestDto) {
        return this.instituteService.updateNotice(instituteId, dto);
    }
    @Get()
    @UseGuards(JwtAuthGuard)
    getAll(@Req() req: any) {
        return this.noticeService.getAllNotice(req.institute);
    }
    @Get(':institute_id')
    @UseGuards(JwtAuthGuard)
    getOne(@Param('institute_id') instituteId: number, @Req() req: any) {
        return this.instituteService.getOne(instituteId, req.user);
    }

}