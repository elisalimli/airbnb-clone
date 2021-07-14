import { User } from "../../../models";
import { ObjectType, Field } from "type-graphql";
import { OkResponse } from "../../../shared/OkResponse";

@ObjectType()
export class RegisterResponse extends OkResponse {
  @Field(() => User, { nullable: true })
  user?: User;
}
