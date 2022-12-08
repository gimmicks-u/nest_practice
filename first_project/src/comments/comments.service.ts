import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comments } from './comments.schema';
import { CommentsCreateDto } from './dtos/comments.create.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name) private readonly commentsModel: Model<Comments>,
    private readonly catsRe,
  ) {}

  async getAllComments() {
    return 'hello world';
  }

  async createComments(id: string, comments: CommentsCreateDto) {
    return 'hello world';
  }

  async plusLike(id: string) {
    return 'hello world';
  }
}
