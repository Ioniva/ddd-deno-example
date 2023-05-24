import UserAge from "../../../../src/modules/users/domain/UserAge.ts";
import IntegerMother from "../../shared/domain/IntegerMother.ts";

export default class UserAgeMother {
  public static create(age?: number): UserAge {
    return new UserAge(age ?? IntegerMother.between(18, 65));
  }
}
