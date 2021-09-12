import { Logger, UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/auth.context';
import { UserEntity } from 'src/entities/user.entity';
import { GqlAuthGuard } from 'src/gql-auth-guard/gql-auth-guard.service';
import { CreatePostInputDTO } from './dto/create-post-input.dto';
import { PostObject } from './dto/post.object';
import { UpdatePostInput } from './dto/update-post-input.dto';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  private logger: Logger;
  constructor(private readonly postService: PostService) {
    this.logger = new Logger('PostResolver');
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async createPost(
    @Args('data') data: CreatePostInputDTO,
    @CurrentUser() user: UserEntity,
  ): Promise<boolean> {
    const { title, contents } = data;

    const userId = user.id;

    await this.postService.createPost(title, contents, userId);

    return true;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async updatePost(@Args('data') data: UpdatePostInput) {
    try {
      const { id, title, contents } = data;

      await this.postService.updatePost(id, title, contents);
      return true;
    } catch (e) {
      this.logger.error('updatePost: ', e);
      return false;
    }
  }

  @Query(() => PostObject)
  async post(@Args('postId') postId: number) {
    try {
      const post = await this.postService.post(postId);

      return post;
    } catch (e) {
      console.log('post Error', e);
      return null;
    }
  }
}
