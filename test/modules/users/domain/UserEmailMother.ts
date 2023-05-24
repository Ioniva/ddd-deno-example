import UserEmail from "../../../../src/modules/users/domain/UserEmail.ts";
import EmailMother from "../../shared/domain/EmailMother.ts";

export default class UserEmailMother {
  public static create(email?: string): UserEmail {
    return new UserEmail(email ?? EmailMother.create());
  }
}
