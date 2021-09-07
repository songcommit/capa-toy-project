import { Field, ObjectType } from '@nestjs/graphql';
import { PostObject } from './Post.object';

@ObjectType()
export class CommentObject {
  @Field()
  id: string;

  @Field()
  contents: string;

  @Field((type) => PostObject)
  post: PostObject;
}
