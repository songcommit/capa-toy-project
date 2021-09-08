import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PostEntity } from 'src/entities/post.entity';

@ObjectType()
@Entity()
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  contents: string;

  @ManyToOne((type) => PostEntity, (post) => post.comment)
  post: PostEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: number;
}
