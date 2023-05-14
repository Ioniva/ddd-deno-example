import { Router } from "https://deno.land/x/oak@v12.4.0/mod.ts";
import { walk } from "https://deno.land/std@0.185.0/fs/mod.ts";

export async function loadRoutes(router: Router) {
  const routesDir = "src/api/routes";
  const routeFiles = walk(routesDir, { exts: [".route.ts"] });

  for await (const file of routeFiles) {
    const { register } = await import(`../../${file.path}`);
    register(router);
    console.log(`Imported route: ${file.path}`);
  }
}
