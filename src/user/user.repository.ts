import { UserEntity } from '../entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { UserObject } from './dto/user.object';

@EntityRepository(UserEntity) //@EntityRepository(UserEntity)안의 내장 함수중 FunctionConstructor를 통해서 객체가 생성된다.
export class UserRepository extends Repository<UserEntity> {
  private logger: Logger;

  super() {
    this.logger = new Logger('UserRepository');
  }

  async isExist(email: string): Promise<boolean> {
    await this.findOne({ email: email });

    return true;
  }

  async userFindOne(email: string): Promise<UserObject> {
    console.log(
      'this.findOne({ email: email }): ',
      this.findOne({ email: email }),
    );
    return await this.findOne({ email: email });
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
