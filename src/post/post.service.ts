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
    userId: number,
  ): Promise<boolean> {
    const result = await this.postRepository.updatePost(
      postId,
      title,
      contents,
      userId,
    );
    console.log('updatePost result: ', result);
    return true;
  }

  async post(postId: number): Promise<PostObject> {
    try {
      const post = await this.postRepository.post(postId);

      return post;
    } catch (e) {
      console.log('post Error: ', e);
      return null;
    }
  }

  async deletePost(postId: number): Promise<Boolean> {
    try {
      await this.postRepository.deletePost(postId);
      return true;
    } catch (e) {
      console.log('deletePost Error: ', e);
      return false;
    }
  }
}
