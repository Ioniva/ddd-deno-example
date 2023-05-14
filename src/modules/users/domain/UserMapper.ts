import User from "./User.ts";
import UserAge from "./UserAge.ts";
import UserDto from "./UserDto.ts";
import UserEmail from "./UserEmail.ts";
import UserName from "./UserName.ts";
import UserSurname from "./UserSurname.ts";

export default class UserMapper {
  public static toDto(user: User): UserDto {
    return {
      name: user.name.value,
      surname: user.surname.value,
      age: user.age.value,
      email: user.email.value,
      id: user.uuid.getValue(),
    };
  }

  public static fromDto(dto: UserDto): User {
    return User.create(
      new UserName(dto.name),
      new UserSurname(dto.surname),
      new UserAge(dto.age),
      new UserEmail(dto.email)
    );
  }
}
