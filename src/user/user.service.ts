import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entities/User.entity';
import { UserEntityRepository } from './user.repository';

@Injectable()
export class UserService {
  // userRepository = new UserEntityRepository();
  // constructor(
  //   @InjectRepository(UserEntity)
  //   userRepository: Repository<UserEntity>,
  // ) {
  //   // 이게 숨겨져 있슴
  //   this.userRepository = userRepository;
  // }

  constructor(private userRepository: UserEntityRepository) {}

  async allUser(): Promise<UserEntity[]> {
    return this.userRepository.allUser();
  }
}
