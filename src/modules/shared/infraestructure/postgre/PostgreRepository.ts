import { PoolClient } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

export abstract class PostgreRepository {
  private client: Promise<PoolClient>;

  constructor(dependencies: { postgreClient: Promise<PoolClient> }) {
    this.client = dependencies.postgreClient;
  }

  protected getClient(): Promise<PoolClient> {
    return this.client;
  }

  // deno-lint-ignore no-explicit-any
  protected async execute(query: string, ...args: any[]): Promise<any> {
    const client = await this.getClient();
    try {
      return client.queryArray(query, ...args);
    } catch (error) {
      console.log("Error executing query: ", error.message);
      throw error;
    }
  }

  public async end(): Promise<void> {
    try {
      const client = await this.getClient();
      await client.end();
      console.log("Connection pool closed successfully");
    } catch (error) {
      console.log("Error closing connection pool");
      throw error;
    }
  }
}
