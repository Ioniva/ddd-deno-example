import { Pool, PoolClient } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { IPostgreConfig } from "./IPostgreConfig.ts";

export default class PostgreClientFactory {
  public static async createClient(config: IPostgreConfig): Promise<PoolClient> {
    const pool = new Pool(config, 1);

    try {
      console.log("Creating connection...");
      const client = await pool.connect();
      console.log("Connection to database created successfully");
      return client;
    } catch (error) {
      console.log("Error creating connection: ", error.message);
      await pool.end();
      throw error;
    }
  }
}
