import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  contents: string;
}
