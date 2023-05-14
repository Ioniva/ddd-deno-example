import UserAge from "./UserAge.ts";
import UserEmail from "./UserEmail.ts";
import UserId from "./UserId.ts";
import UserName from "./UserName.ts";
import UserSurname from "./UserSurname.ts";

export default class User {
  readonly name: UserName;
  readonly surname: UserSurname;
  readonly age: UserAge;
  readonly email: UserEmail;
  readonly uuid: UserId;

  constructor(name: UserName, surname: UserSurname, age: UserAge, email: UserEmail, uuid: UserId) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
    this.uuid = uuid;
  }

  static create(name: UserName, surname: UserSurname, age: UserAge, email: UserEmail): User {
    const uuid = UserId.random();
    return new User(name, surname, age, email, uuid);
  }
}
