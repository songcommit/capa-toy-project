import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserObject {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  password: string;

  // @Field((type) => [PostObject])
  // post: PostObject[];

  // @Field()
  // createdAt: Date;

  // @Field()
  // updatedAt: Date;

  // @Field()
  // deleteAt: Date;
}
