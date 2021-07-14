import argon2 from "argon2";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import * as yup from "yup";
import { error } from "../register/error";
import { User } from "../../../models/User";
import { MyContext } from "../../../../types/MyContext";
import { formatYupError } from "../../../../utils";
import { FieldError } from "../../../shared/FieldError";
import { LoginInput } from "./input";
import { RegistrationResponse } from "../../../shared/RegistrationResponse";

const { shortUsername, shortPassword } = error;

const schema = yup.object().shape({
  usernameOrEmail: yup.string().min(2, shortUsername),
  password: yup.string().min(3, shortPassword),
});

@Resolver(User)
export class LoginResolver {
  @Mutation(() => RegistrationResponse)
  async login(
    @Arg("input") input: LoginInput,
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

    const errors: Array<FieldError> = [];

    let valid = false;
    const user = (await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: input.usernameOrEmail,
          },
          { username: input.usernameOrEmail },
        ],
      },
    })) as User;

    if (user) valid = await argon2.verify(user.password, input.password);

    if (!valid)
      errors.push({ field: "password", message: "Password is incorrect" });
    if (!user)
      errors.push({
        field: "usernameOrEmail",
        message: "Username or email doesn't exist",
      });

    if (errors.length)
      return {
        ok: false,
        errors,
      };

    req.session.userId = user.id;

    return {
      ok: true,
      user,
    };
  }
}
