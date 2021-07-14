import { ObjectType, Field } from "type-graphql";


@ObjectType({
  isAbstract: true,
})
export class User {
  @Field()
  id!: string;

  @Field()
  email!: string;

  @Field()
  username!: string;

  password!: string;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}