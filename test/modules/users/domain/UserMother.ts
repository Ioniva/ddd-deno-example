import User from "../../../../src/modules/users/domain/User.ts";
import UserAge from "../../../../src/modules/users/domain/UserAge.ts";
import UserEmail from "../../../../src/modules/users/domain/UserEmail.ts";
import UserId from "../../../../src/modules/users/domain/UserId.ts";
import UserName from "../../../../src/modules/users/domain/UserName.ts";
import UserSurname from "../../../../src/modules/users/domain/UserSurname.ts";
import UserAgeMother from "./UserAgeMother.ts";
import UserEmailMother from "./UserEmailMother.ts";
import UserIdMother from "./UserIdMother.ts";
import UserNameMother from "./UserNameMother.ts";
import UserSurnameMother from "./UserSurnameMother.ts";

export default class UserMother {
  public static create(name?: UserName, surname?: UserSurname, age?: UserAge, email?: UserEmail, id?: UserId): User {
    return new User(
      name ?? UserNameMother.create(),
      surname ?? UserSurnameMother.create(),
      age ?? UserAgeMother.create(),
      email ?? UserEmailMother.create(),
      id ?? UserIdMother.create()
    );
  }
}
