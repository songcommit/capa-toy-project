import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserEntity } from '../entities/User.entity';
import { UserResolver } from './user.resolver';
import { UserRepository } from './user.repository';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UserService, UserResolver],
})
export class UserModule {}
