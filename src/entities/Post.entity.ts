import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserEntity } from './User.entity';
import { CommentEntity } from './Comment.entity';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  contents: string;

  @ManyToOne(() => UserEntity, (user) => user.post)
  user: UserEntity;

  @OneToMany((type) => CommentEntity, (comment) => comment.post)
  comment: CommentEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
