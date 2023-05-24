import { IUserRepository } from "../../../../../src/modules/users/domain/IUserRepository.ts";
import User from "../../../../../src/modules/users/domain/User.ts";
import UserId from "../../../../../src/modules/users/domain/UserId.ts";

export default class InMemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  save(user: User): Promise<User> {
    return new Promise((resolve) => {
      this.users.push(user);
      resolve(user);
    });
  }

  getAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

  getById(_id: UserId): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
