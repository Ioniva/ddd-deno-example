import { Status } from "https://deno.land/x/oak@v12.4.0/deps.ts";
import { Context } from "https://deno.land/x/oak@v12.4.0/mod.ts";
import { ValidationRules, validate } from "https://deno.land/x/validasaur@v0.15.0/mod.ts";

export const validateReqSchema = async (ctx: Context, schema: ValidationRules) => {
  try {
    const body = await ctx.request.body().value;
    const [passes, errors] = await validate(body, schema);

    if (!passes) {
      ctx.response.status = Status.UnprocessableEntity;
      ctx.response.body = { errors, message: "Invalid request body." };
      return false;
    }
    return true;
  } catch (_error) {
    ctx.response.status = Status.BadRequest;
    ctx.response.body = { message: "Invalid request body." };
  }
};
