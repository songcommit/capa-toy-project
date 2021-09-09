import { PostEntity } from '../entities/Post.entity';
import { EntityRepository, Repository } from 'typeorm';
import { PostObject } from './dto/post.object';

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
  async allPost(): Promise<PostObject[]> {
    return await this.createQueryBuilder('post').getMany();
  }
}
