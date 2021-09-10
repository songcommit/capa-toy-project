import { Field, ObjectType } from '@nestjs/graphql';
import { createHmac } from 'crypto';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn,
  BaseEntity,
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { PostEntity } from './post.entity';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  private tempPassword: string;
  @AfterLoad()
  private loadTempPassword(): void {
    this.tempPassword = this.password;
  }
  @BeforeInsert()
  @BeforeUpdate()
  private encryptPassword(): void {
    if (this.tempPassword !== this.password) {
      this.password = createHmac('sha256', this.password).digest('hex');
    }
  }

  @OneToMany(() => PostEntity, (post) => post.user)
  post: PostEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
