import { UserEntity } from '../entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UserObject } from './dto/user.object';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}
