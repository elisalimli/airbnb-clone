/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ctx, Mutation, Resolver } from "type-graphql";
import { MyContext } from "../../../../types/MyContext";
import { COOKIE_NAME } from "../../../../utils";
import { User } from "../../../models/User";

@Resolver(User)
export class LogoutResolver {
  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext): Promise<boolean> {
    return new Promise((resolve) =>
      req.session.destroy((err: Error) => {
        (res as any).clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }
}
