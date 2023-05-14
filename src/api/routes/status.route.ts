import { Context, Router } from "https://deno.land/x/oak@v12.4.0/mod.ts";

export const register = (router: Router) => {
  router.get("/status", (ctx: Context) => (ctx.response.body = { message: "The API is up and running!" }));
};
