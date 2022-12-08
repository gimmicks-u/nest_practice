import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comments } from './comments.schema';

@Injectable()
export class CommentsRepository {
  constructor(
    @InjectModel(Comments.name) private readonly catModel: Model<Comments>,
  ) {}
}
