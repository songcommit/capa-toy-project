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

  async createPost(createPostDTO: CreatePostInputDTO): Promise<boolean> {
    const { title } = createPostDTO;
    await this.postRepository.createPost(title);
    return true;
  }
}
