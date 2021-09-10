import { UserEntity } from '../entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  private logger: Logger;

  super() {
    this.logger = new Logger('UserRepository');
  }

  async isExist(email: string): Promise<boolean> {
    await this.findOne({ email: email });

    return true;
  }

  async createUser(email: string, password: string): Promise<boolean> {
    try {
      await this.create({ email, password }).save();
      return true;
    } catch (e) {
      this.logger.error('createUserError: ', e);
    }
  }
}
