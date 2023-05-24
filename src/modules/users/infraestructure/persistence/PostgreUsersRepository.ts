import { IUserRepository } from "../../domain/IUserRepository.ts";
import User from "../../domain/User.ts";
import UserId from "../../domain/UserId.ts";
import { PostgreRepository } from "../../../shared/infraestructure/postgre/PostgreRepository.ts";

export default class PostgreUsersRepository extends PostgreRepository implements IUserRepository {
  async save(user: User): Promise<User> {
    const query = "INSERT INTO users (name, surname, age, email, uuid) VALUES ($1, $2, $3, $4, $5)";
    const args = [user.name.value, user.surname.value, user.age.value, user.email.value, user.uuid.getValue()];

    try {
      await this.execute(query, args);
      console.log("User saved successfully");
      return user;
    } catch (error) {
      console.log("Error saving user: ", error.message);
      throw error;
    }
  }

  async getAll(): Promise<User[]> {
    const query = "SELECT * FROM users";
    const result = await this.execute(query);
    return result.rows.map(
      // deno-lint-ignore no-explicit-any
      (row: any) => {
        const [_id, name, surname, age, email, uuid] = row;
        return new User(name, surname, age, email, uuid);
      }
    );
  }

  getById(_id: UserId): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
