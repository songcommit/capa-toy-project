import { PostEntity } from 'src/entities/post.entity';
import { EntityRepository, Repository } from 'typeorm';
import { PostObject } from './dto/post.object';

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
  async createPost(title: string): Promise<boolean> {
    try {
      await this.create({ title: title }).save();

      return true;
    } catch (e) {
      console.log('allPost Error: ', e);
      return false;
    }
  }
}
