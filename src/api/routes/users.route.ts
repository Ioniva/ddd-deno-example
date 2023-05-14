import { Context, Router } from "https://deno.land/x/oak@v12.4.0/mod.ts";
import UserPostController from "../controllers/users/UserPostController.ts";
import bankContainer from "../dependency-injection/users.container.ts";
import { required, isString, isEmail, isNumber } from "https://deno.land/x/validasaur@v0.15.0/mod.ts";
import { validateReqSchema } from "../utils/validateReqSchema.ts";

export const register = (router: Router) => {
  const userValidationRules = {
    name: [required, isString],
    surname: [required, isString],
    age: [required, isNumber],
    email: [required, isEmail],
  };

  const userPostController: UserPostController = bankContainer.resolve("userPostController");

  router.post("/users", async (ctx: Context) => {
    const isValid = await validateReqSchema(ctx, userValidationRules);
    if (!isValid) return;

    await userPostController.run(ctx);
  });
};
