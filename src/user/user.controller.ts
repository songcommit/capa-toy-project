import { Controller } from '@nestjs/common';
import { EntityRepository } from 'typeorm';
import { UserEntity } from './user.entity';

@Controller('user')
export class UserController {
  constructor(user: UserEntity) {}
}
