import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostInputDTO } from './dto/create-post-input.dto';
import { PostObject } from './dto/post.object';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostRepository)
    private postRepository: PostRepository,
  ) {}

  async createPost(
    title: string,
    contents: string,
    userId: number,
  ): Promise<boolean> {
    await this.postRepository.createPost(title, contents, userId);
    return true;
  }

  async updatePost(
    postId: number,
    title: string,
    contents: string,
  ): Promise<boolean> {
    const result = await this.postRepository.updatePost(
      postId,
      title,
      contents,
    );
    console.log('updatePost result: ', result);
    return true;
  }
}
