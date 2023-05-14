import { asClass, asFunction, asValue, createContainer } from "npm:awilix@8.0.1";
import UserPostController from "../controllers/users/UserPostController.ts";
import CreateUser from "../../modules/users/application/CreateUser.ts";
import PostgreConfigFactory from "../../modules/shared/infraestructure/postgre/PostgreConfigFactory.ts";
import PostgreClientFactory from "../../modules/shared/infraestructure/postgre/PostgreClientFactory.ts";
import PostgreUsersRepository from "../../modules/users/infraestructure/persistence/PostgreUsersRepository.ts";

const container = createContainer();

container.register({
  // Postgre config
  postgreConfig: asValue(PostgreConfigFactory.create()),

  // Postgre client connection
  postgreClient: asFunction(async (context) => {
    const { config } = context;
    return await PostgreClientFactory.createClient(config);
  })
    .inject(() => ({
      config: container.resolve("postgreConfig"),
    }))
    .scoped(),

  // Use Case
  userService: asClass(CreateUser),

  // Controller
  userPostController: asClass(UserPostController).inject(() => ({
    createUser: container.resolve("userService"),
  })),

  // Repository factory
  userRepository: asClass(PostgreUsersRepository),
});

export default container;
