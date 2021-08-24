import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateNoticeReqDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty({ default: 'test' })
  title: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ default: 'dsfdggfdgfd' })
  description: string;
}