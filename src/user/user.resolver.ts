import { Resolver, Query } from '@nestjs/graphql';
import { UserObject } from './dto/user.object';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserObject])
  async allUser(): Promise<UserObject[]> {
    // 타입스크립트를 위함 : Boolean은 옵션
    // return this.userService.allUser();
    return null;
  }
}
