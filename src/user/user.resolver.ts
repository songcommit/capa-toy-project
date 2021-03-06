import { Logger } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user-Input';
import { FindOneUserInput } from './dto/find-one-user-Input';
import { UserObject } from './dto/user.object';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  private logger: Logger;
  constructor(private readonly userService: UserService) {
    this.logger = new Logger('UserResolver');
  }

  @Mutation(() => Boolean)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<boolean> {
    try {
      const { email } = createUserInput;

      const isEmail = await this.userService.isEmail(email);

      //유저가 존재하지 않는 case
      if (isEmail) {
        await this.userService.createUser(createUserInput);
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log('createUser Error: ', e);
      return false;
    }
  }

  @Query(() => UserObject)
  async findOneUser(@Args('data') data: FindOneUserInput) {
    try {
      const { email, password } = data;

      const user = await this.userService.userFindOne(email, password);
      return user;
    } catch (e) {
      console.log('findOneUser Error:', e);
      return null;
    }
  }
}
