import MotherCreator from "./MotherCreator.ts";

export default class WordMother {
  public static create(): string {
    return MotherCreator.random().word.sample();
  }
}
