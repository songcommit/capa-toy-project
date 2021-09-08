import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { UserEntity } from '../entities/User.entity';
import { UserService } from './user.service';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // @Query(() => [UserEntity])
  // async users() {
  //   return this.userService.allPost();
  // }
}
