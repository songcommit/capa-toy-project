import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostRepository])], //PostEntity를 사용하지 않고 PostRepository를 쓰는 이유는 PostRepostitory가 PostEntity를 상속 받으니까 PostRepository를 하는 것이다.
  providers: [PostService, PostResolver],
})
export class PostModule {}
