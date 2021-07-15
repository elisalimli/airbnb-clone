import argon2 from "argon2";
import { User } from "../../../models";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import * as yup from "yup";
import { error } from "./error";
import { MyContext } from "../../../../types/MyContext";
import { formatYupError } from "../../../../utils";
import { RegistrationResponse } from "../../../shared/RegistrationResponse";
import { RegisterInput } from "./input";

const schema = yup.object().shape({
  username: yup.string().min(2, error.shortEmail).max(30, error.longUsername),
  email: yup
    .string()
    .min(5, error.shortEmail)
    .max(30, error.longUsername)
    .email(error.invalidEmail),
  password: yup
    .string()
    .min(3, error.shortPassword)
    .max(255, error.longPassword),
});

@Resolver(User)
export class RegisterResolver {
  @Query(() => [User], { nullable: true })
  async allUsers(@Ctx() { prisma, req }: MyContext): Promise<User[]> {
    return prisma.user.findMany();
  }

  @Mutation(() => RegistrationResponse)
  async register(
    @Arg("input") input: RegisterInput,
    @Ctx() { req, prisma }: MyContext
  ): Promise<RegistrationResponse> {
    try {
      await schema.validate(input, { abortEarly: false });
    } catch (err) {
      return {
        ok: false,
        errors: formatYupError(err),
      };
    }

    let user;
    try {
      const hashedPassword = await argon2.hash(input.password);
      user = await prisma.user.create({
        data: {
          ...input,
          password: hashedPassword,
        },
      });
    } catch (err) {
      console.log(err);
      if (err.code === "P2002") {
        // get which field duplicate
        const duplicateKey = err?.meta?.target[0];

        return {
          ok: false,
          errors: [
            {
              field: duplicateKey,
              message: `this ${duplicateKey} already taken`,
            },
          ],
        };
      }
      return {
        ok: false,
        errors: [
          {
            field: "general",
            message: "Something went wrong,please try again.",
          },
        ],
      };
    }

    //store user id in session
    //keep logged in user
    req.session.userId = user.id;

    return {
      ok: true,
      user,
    };
  }
}
