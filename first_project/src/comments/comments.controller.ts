import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CommentsCreateDto } from './dtos/comments.create.dto';
import { SuccessInterceptor } from '../common/interceptors/success.interceptor';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';

@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
@Controller('comments')
export class CommentsController {
  constructor(private readonly CommentsService: CommentsService) {}

  @ApiOperation({
    summary: '모든 고양이 프로필에 적힌 댓글 가져오기',
  })
  @Get('')
  async getAllComments() {
    return this.CommentsService.getAllComments();
  }

  @ApiOperation({
    summary: '모든 고양이 프로필에 적힌 댓글 가져오기',
  })
  @Post(':id')
  async createComments(
    @Param('id') id: string,
    @Body() body: CommentsCreateDto,
  ) {
    return this.CommentsService.createComments(id, body);
  }

  @ApiOperation({
    summary: '좋아요 수 올리기',
  })
  @Post(':id')
  async plusLike(@Param('id') id: string) {
    return this.CommentsService.plusLike(id);
  }
}
