import { User } from "../models";
import { ObjectType, Field } from "type-graphql";
import { OkResponse } from "./OkResponse";

@ObjectType()
export class RegistrationResponse extends OkResponse {
  @Field(() => User, { nullable: true })
  user?: User;
}
