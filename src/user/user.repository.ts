import { UserEntity } from '../entities/User.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UserObject } from './dto/user.object';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async allUser(): Promise<UserObject[]> {
    return await this.createQueryBuilder('user').getMany();
  }
}
