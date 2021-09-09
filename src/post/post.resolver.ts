import { Resolver, Query } from '@nestjs/graphql';
import { PostObject } from './dto/post.object';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}
  @Query(() => [PostObject])
  async allPost(): Promise<PostObject[]> {
    return await this.postService.allPost();
  }
}
