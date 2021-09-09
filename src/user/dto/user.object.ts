import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserObject {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  nickname: string;

  // @Field((type) => [PostObject])
  // post: PostObject[];

  // @Field()
  // createdAt: Date;

  // @Field()
  // updatedAt: Date;

  // @Field()
  // deleteAt: Date;
}
