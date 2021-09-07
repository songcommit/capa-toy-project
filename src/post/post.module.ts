import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { CommentModule } from 'src/comment/comment.module';
// import { CommentEntity } from 'src/entities/Comment.entity';
import { PostEntity } from 'src/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  exports: [TypeOrmModule],
})
export class PostModule {}
