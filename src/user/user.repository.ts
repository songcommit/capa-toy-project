import { UserEntity } from 'src/entities/User.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UserEntity)
export class UserEntityRepository extends Repository<UserEntity> {
  async allUser(): Promise<UserEntity[]> {
    return await this.createQueryBuilder('user').getMany();
  }
}
