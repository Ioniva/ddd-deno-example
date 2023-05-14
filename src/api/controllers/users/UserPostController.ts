import { Context } from "https://deno.land/x/oak@v12.4.0/mod.ts";
import { Status } from "https://deno.land/x/oak@v12.4.0/deps.ts";
import CreateUser from "../../../modules/users/application/CreateUser.ts";

export default class UserPostController {
  private userService: CreateUser;

  constructor(dependencies: { userService: CreateUser }) {
    this.userService = dependencies.userService;
  }

  async run(ctx: Context): Promise<void> {
    try {
      const { name, surname, age, email } = await ctx.request.body().value;
      const result = await this.userService.run(name, surname, age, email);

      ctx.response.status = Status.Created;
      ctx.response.body = result;
    } catch (error) {
      console.log(error);
      ctx.response.status = Status.InternalServerError;
    }
  }
}
