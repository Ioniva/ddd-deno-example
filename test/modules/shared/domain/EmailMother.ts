import MotherCreator from "./MotherCreator.ts";

export default class EmailMother {
  public static create(): string {
    return MotherCreator.random().internet.email();
  }
}
