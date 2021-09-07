import { Field, ObjectType } from '@nestjs/graphql';
import { CommentObject } from './Comment.object';
import { UserObject } from './User.object';

@ObjectType()
export class PostObject {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  contents: string;

  @Field((type) => UserObject)
  user: UserObject;

  @Field((type) => [CommentObject])
  comment: CommentObject[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
