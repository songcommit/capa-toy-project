import { UserEntity } from '../entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { UserObject } from './dto/user.object';
import { createHmac } from 'crypto';

@EntityRepository(UserEntity) //@EntityRepository(UserEntity)안의 내장 함수중 FunctionConstructor를 통해서 객체가 생성된다.
export class UserRepository extends Repository<UserEntity> {
  private logger: Logger;

  super() {
    this.logger = new Logger('UserRepository');
  }

  async isExist(email: string): Promise<boolean> {
    const isExist = await this.findOne({ email: email });

    if (!isExist) {
      return false;
    }
    return true;
  }

  async userFindOne(email: string, password: string): Promise<UserObject> {
    const user = await this.findOne({ email });

    if (user.password !== createHmac('sha256', password).digest('hex')) {
      throw new Error('Invalid password.');
    }

    return user;
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
