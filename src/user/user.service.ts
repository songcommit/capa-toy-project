import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { CreateUserInput } from './dto/create-user-Input';
import { UserObject } from './dto/user.object';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  private logger: Logger;
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    this.logger = new Logger('UserService');
  }

  async findOne(email: string, password: string): Promise<UserObject> {
    try {
      await this.userRepository
        .createQueryBuilder('user')
        .where('user.email = :email');
    } catch (e) {
      this.logger.error('findOne Error', e);
      return null;
    }
  }

  async isEmail(email: string): Promise<boolean> {
    try {
      const isExist = await this.userRepository.isExist(email);

      return isExist;
    } catch (e) {
      console.log('isEmail Error: ', e);
      return false;
    }
  }

  async createUser(CreateUserInput: CreateUserInput): Promise<boolean> {
    try {
      const { email, password } = CreateUserInput;

      await this.userRepository.createUser(email, password);
      return true;
    } catch (e) {
      console.log('createUser Error: ', e);
      return false;
    }
  }
}
