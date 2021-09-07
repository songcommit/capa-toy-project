import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { PostEntity } from 'src/entities/post.entity';
// import { CommentEntity } from '../entities/Comment.entity';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

// @Module({
//   imports: [TypeOrmModule.forFeature([CommentEntity, PostEntity])],
//   providers: [CommentService],
//   controllers: [CommentController],
// })
// export class CommentModule {}
