import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostObject {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  contents: string;

  @Field()
  rfc: string;

  // @Field()
  // user: UserObject;

  // @Field()
  // createdAt: Date;

  // @Field()
  // updatedAt: Date;
}
