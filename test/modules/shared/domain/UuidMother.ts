import MotherCreator from "./MotherCreator.ts";

export default class UuidMother {
  public static create(): string {
    return MotherCreator.random().string.uuid();
  }
}
