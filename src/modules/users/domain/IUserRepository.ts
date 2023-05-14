import User from "./User.ts";
import UserId from "./UserId.ts";

export interface IUserRepository {
  save(user: User): Promise<User>;
  getAll(): Promise<Array<User>>;
  getById(id: UserId): Promise<User>;
}
