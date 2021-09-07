import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserEntity } from '../entities/User.entity';
import { UserResolver } from './user.resolver';
import { PostEntity } from 'src/entities/post.entity';
import { PostModule } from 'src/post/post.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [TypeOrmModule],
  providers: [UserService, UserResolver],
})
export class UserModule {}
