import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dto/create-user-Input';
import { UserObject } from './dto/user.object';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async isEmail(email: string): Promise<boolean> {
    try {
      console.log('email: ', email);
      const isExist = await this.userRepository
        .createQueryBuilder('user')
        .where('user.email = :email', { email })
        .getOne();

      Logger.log('isExist: ', isExist);

      if (!isExist) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log('isEmail Error: ', e);
      return false;
    }
  }

  async createUser(CreateUserInput: CreateUserInput): Promise<boolean> {
    try {
      const { email, password } = CreateUserInput;

      await this.userRepository.create({ email, password }).save();
      return true;
    } catch (e) {
      console.log('createUser Error: ', e);
      return false;
    }
  }
}
