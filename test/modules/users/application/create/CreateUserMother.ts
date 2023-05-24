import InMemoryUserRepository from "../../infraestructure/persistence/InMemoryUserRepository.ts";
import CreateUser from "../../../../../src/modules/users/application/CreateUser.ts";
import { IUserRepository } from "../../../../../src/modules/users/domain/IUserRepository.ts";
import UserMother from "../../domain/UserMother.ts";
import { assertEquals, assertInstanceOf } from "https://deno.land/std@0.160.0/testing/asserts.ts";

Deno.test("should save user and return user dto", async () => {
  // Arrange
  const inMemoryUserRepository: IUserRepository = new InMemoryUserRepository();
  const createUser: CreateUser = new CreateUser({ userRepository: inMemoryUserRepository });

  // Test input values
  const user = UserMother.create();

  // Act
  const result = await createUser.run(user.name.value, user.surname.value, user.age.value, user.email.value);

  // Assert
  assertEquals(result.message, "User created successfully");
  assertInstanceOf(result.user, Object);
});
