import StringValueObject from "../../shared/domain/value-objects/StringValueObject.ts";

export default class UserName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan250Characters(value);
  }

  private ensureLengthIsLessThan250Characters(value: string): void {
    if (value.length > 250) {
      throw new Error(`The BankName <${value}> has more than 250 characters`);
    }
  }
}
