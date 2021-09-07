import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Connection, createConnection, getConnectionManager } from 'typeorm';
import { UserEntity } from './entities/User.entity';
import { PostEntity } from './entities/Post.entity';
// import { CommentEntity } from './entities/Comment.entity';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
// import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   debug: false,
    //   playground: true,
    // }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: ['./entities/**/*.js'],
      synchronize: true,
    }),
    // CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
