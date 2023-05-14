import { Application, Router } from "https://deno.land/x/oak@v12.4.0/mod.ts";
import { CORS } from "https://deno.land/x/oak_cors@v0.1.1/mod.ts";
import { loadRoutes } from "./routes-loader.ts";

const port: number = Number(Deno.env.get("DENO_APP_PORT")) || 4000;

const app = new Application();
const router = new Router();

await loadRoutes(router);

app.use(CORS());
app.use(router.routes());
app.use(router.allowedMethods());

// run the app
app.listen({ port: port });

// print the app status
console.log("=========================================================");
console.log(`App is running at http://localhost:${port} in dev mode`);
console.log("  Press CTRL-C to stop\n");
