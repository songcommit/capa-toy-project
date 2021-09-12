import { Logger } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';

@Resolver()
export class AuthResolver {
  private logger: Logger;
  constructor(private authService: AuthService) {
    this.logger = new Logger('AuthResolver');
  }

  @Query(() => String)
  async validateUser(@Args('data') data: AuthDTO) {
    try {
      const { email, password } = data;
      const token = this.authService.validateUser(email, password);

      return token;
    } catch (e) {
      this.logger.error(e);
      return false;
    }
  }
}
