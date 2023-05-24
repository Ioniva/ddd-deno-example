import UserSurname from "../../../../src/modules/users/domain/UserSurname.ts";
import WordMother from "../../shared/domain/WordMother.ts";

export default class UserSurnameMother {
  public static create(surname?: string): UserSurname {
    return new UserSurname(surname ?? WordMother.create());
  }
}
