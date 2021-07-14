import { ObjectType, Field } from "type-graphql";
import { FieldError } from "./FieldError";

@ObjectType()
export class OkResponse {
  @Field(() => Boolean)
  ok!: boolean;

  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
}
