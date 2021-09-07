import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/User.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  //유저 전체를 가져옴
  users(): Promise<UserEntity[]> {
    return this.userRepository.createQueryBuilder('user').getMany();
  }
}
