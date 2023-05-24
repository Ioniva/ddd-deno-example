import UserId from "../../../../src/modules/users/domain/UserId.ts";
import UuidMother from "../../shared/domain/UuidMother.ts";

export default class UserIdMother {
  public static create(id?: string): UserId {
    return new UserId(id ?? UuidMother.create());
  }
}
