import MotherCreator from "./MotherCreator.ts";

export default class IntegerMother {
  public static between(min: number, max: number): number {
    return MotherCreator.random().number.int({ min, max });
  }

  public static lessThan(max: number) {
    return this.between(1, max);
  }
}
