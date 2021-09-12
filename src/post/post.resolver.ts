import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/gql-auth-guard/gql-auth-guard.service';
import { CreatePostInputDTO } from './dto/create-post-input.dto';
import { PostObject } from './dto/post.object';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async createPost(@Args('data') data: CreatePostInputDTO): Promise<boolean> {
    const { title } = data;
    return await this.postService.createPost({ title });
  }
}
