import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class AuthService {
  private logger: Logger;
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {
    this.logger = new Logger('AuthService');
  }

  async validateUser(email: string, password: string): Promise<String> {
    const user = await this.userRepository.userFindOne(email, password);

    if (user) {
      const { ...result } = user;
      this.logger.log('validateUser Result: ', result);

      const payload = { username: user.email, sub: user.id };

      return this.jwtService.sign(payload);
    }
  }
}
