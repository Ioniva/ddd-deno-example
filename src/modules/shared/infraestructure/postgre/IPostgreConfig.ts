import { ClientOptions } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

export interface IPostgreConfig extends ClientOptions {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  connectionTimeoutMillis: number;
  host_type: "tcp" | "socket";
}
