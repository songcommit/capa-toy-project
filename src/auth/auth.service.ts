import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { env } from 'process';
import { UserRepository } from 'src/user/user.repository';
import { jwtConstants } from './jwtContans';

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

  async login(email: string, password: string): Promise<String> {
    const user = await this.userRepository.userFindOne(email, password);

    if (user) {
      const { ...result } = user;
      this.logger.log('validateUser Result: ', result);

      const payload = { username: user.email, sub: user.id };

      return this.jwtService.sign(payload);
    }
  }

  // async decodeJwt(authHeader: string): Promise<Object> {
  //   const token = authHeader;

  //   const jwtObj = this.jwtService.verify(token, {});
  //   console.log('jwtObj: ', jwtObj);

  //   return jwtObj;
  // }
}
