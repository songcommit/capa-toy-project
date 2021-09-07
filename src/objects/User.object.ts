import { Field, ObjectType } from '@nestjs/graphql';
import { PostObject } from './Post.object';

@ObjectType()
export class UserObject {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  nickname: string;

  @Field((type) => [PostObject])
  post: PostObject[];
}
