import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  //   async users(createUserDto: CreateUserDto) {
  async users() {
    const users = await UserEntity.createQueryBuilder('user').getMany();

    return users;
  }
}
