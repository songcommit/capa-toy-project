import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInputDTO {
  @Field()
  title: string;
}
