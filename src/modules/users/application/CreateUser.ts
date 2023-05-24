import { IUserRepository } from "../domain/IUserRepository.ts";
import UserDto from "../domain/UserDto.ts";
import UserMapper from "../domain/UserMapper.ts";

export default class CreateUser {
  private userRepository: IUserRepository;

  constructor(dependencies: { userRepository: IUserRepository }) {
    this.userRepository = dependencies.userRepository;
  }

  // todo: recive a dto instead args...
  public async run(
    name: string,
    surname: string,
    age: number,
    email: string
  ): Promise<{ message: string; user: UserDto | null }> {
    const userDto = new UserDto(name, surname, age, email);
    const recivedUser = UserMapper.fromDto(userDto);
    const savedUser = await this.userRepository.save(recivedUser);
    const userDtoFromEntity = UserMapper.toDto(savedUser);
    return { message: "User created successfully", user: userDtoFromEntity };
  }
}
