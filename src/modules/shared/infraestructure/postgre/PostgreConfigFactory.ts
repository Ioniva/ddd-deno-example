import { IPostgreConfig } from "./IPostgreConfig.ts";
import config from "../../config/index.ts";

/**
 * This class is a factory to create a PostgreConfig object
 * Use a factory to create the client
 * This class can be moved to each context or module
 */
export default class PostgreConfigFactory {
  public static create(): IPostgreConfig {
    return {
      applicationName: Deno.env.get("PGAPPNAME") || "ddd-deno-example",
      host: Deno.env.get("PG_HOSTNAME") || config.DATABASE.HOST,
      port: Number(Deno.env.get("PG_PORT")) || config.DATABASE.PORT,
      user: Deno.env.get("PG_USER") || config.DATABASE.USER,
      password: Deno.env.get("PG_PASSWORD") || config.DATABASE.PASS,
      database: Deno.env.get("PG_DATABASE") || config.DATABASE.NAME,
      host_type: "tcp",
      connectionTimeoutMillis: 5000,
    };
  }
}
