import * as uuid from "https://deno.land/std@0.184.0/uuid/mod.ts";

export default class Uuid {
  constructor(private value: string) {
    this.ensureIsValidUuid(value);
  }

  public static random(): Uuid {
    return new Uuid(crypto.randomUUID());
  }

  private ensureIsValidUuid(id: string): void {
    if (!uuid.validate(id)) {
      throw new Error(`The Uuid <${id}> is not valid`);
    }
  }

  public getValue(): string {
    return this.value;
  }
}
