import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';
import { PostEntity } from './Post.entity';

@ObjectType()
@Entity()
export class UserEntity {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String) // nest(gql)
  @Column()
  email: string;

  @Field(() => String) // nest(gql)
  @Column()
  password: string;

  @Field(() => String) // nest(gql)
  @Column()
  nickname: string;

  @OneToMany(() => PostEntity, (post) => post.user)
  post: PostEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
