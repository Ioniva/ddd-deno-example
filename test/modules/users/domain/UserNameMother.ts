import UserName from "../../../../src/modules/users/domain/UserName.ts";
import WordMother from "../../shared/domain/WordMother.ts";

export default class UserNameMother {
  public static create(name?: string): UserName {
    return new UserName(name ?? WordMother.create());
  }
}
