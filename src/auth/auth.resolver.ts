import { Logger, UseGuards } from '@nestjs/common';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  GqlContextType,
} from '@nestjs/graphql';
import { UserEntity } from 'src/entities/user.entity';
import { GqlAuthGuard } from 'src/gql-auth-guard/gql-auth-guard.service';
import { UserObject } from 'src/user/dto/user.object';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';

export interface Context {
  user?: any;
}
@Resolver()
export class AuthResolver {
  private logger: Logger;
  constructor(private authService: AuthService) {
    this.logger = new Logger('AuthResolver');
  }

  @Query(() => String)
  async login(@Args('data') data: AuthDTO) {
    try {
      const { email, password } = data;
      const token = this.authService.login(email, password);

      return token;
    } catch (e) {
      this.logger.error(e);
      return false;
    }
  }
}
