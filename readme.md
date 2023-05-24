# ⚠️ Project in development ⚠️

This project is an application in development to put new concepts into practice. New changes will be progressively published.

## Technologies and libraries used

The application has been created using the following technologies and libraries:

- **Deno.js** (backend framework): Deno.js was chosen for this project because there was little content about it on the Internet and to learn about its new advantages.
- **Oak** (Deno's native library for creating REST APIs): Oak is one of the most used and recommended libraries for creating REST APIs with Deno.js.
- **Awilix** (downloaded from NPM, used for dependency injection with containers): Awilix is a dependency injection library that allows you to create a modular and scalable application architecture.
- **Validasaur** (Deno's native library for validating data): Validasaur is a data validation library that helps us validate the data we receive in our endpoints.
- **Postgres** (Deno's native library for connecting to the Postgres database): Deno.js's native library was used to connect to a Postgres database.

## Installation

To run this project, it is necessary to have Deno.js and the Postgres database installed. The necessary steps to install and run the project are detailed below:

1. Installation of Deno.js: Deno.js can be downloaded and installed from its official website ([https://deno.land/](https://deno.land/)).
2. Installation of Postgres: Postgres can be downloaded and installed from its official website ([https://www.postgresql.org/download/](https://www.postgresql.org/download/)).
3. Create the database and table: Once Postgres is installed, you must create the necessary database and table for the project.
4. Configure the configuration file with the database information: The configuration file must be configured with the data of the database created in the previous step. The configuration file is located at `src/modules/shared/config/index.ts`.
5. Run the server in development mode: The server can be run in development mode with the following command:

```bash
deno task dev
```

## Architecture and patterns 👩🏽‍🍳

Domain-Driven Design (DDD) architecture is a software design approach that focuses on the business logic of the domain. It focuses on dividing the software into independent domain modules and establishing a common language between developers and domain experts. This approach seeks to improve software quality by ensuring that domain logic is accurately reflected in the code.

In addition, the following software design patterns and principles are applied in this project:

- **SOLID** (design principle): These are 5 software design principles that help create systems that are easy to understand, maintain, and extend. Each principle addresses a different aspect of software design and focuses on modularity, cohesion, and separation of concerns.
- **Tell, don't ask** (design principle): The pattern is based on the idea that an object should inform another object what to do, instead of asking an object for its state and then making decisions based on that state. This approach can improve object cohesion and make the code easier to understand and maintain, as each object is responsible for its own logic and does not depend on other objects to make decisions.
- **Value Object** (software design pattern): It is used to represent immutable values in the system and can be useful for improving modularity, code reuse, and code understanding.
- **Named Constructor** (design pattern): It is a pattern used in object-oriented programming languages. It consists of using class methods with descriptive names to create objects instead of using the default constructor. This allows greater clarity and control in object creation.
- **Repository pattern** (design pattern): It is a pattern used to separate data access logic from business logic. It consists of a class or set of classes that encapsulate data persistence operations in an abstraction layer, allowing business logic to operate with domain objects without having to worry about the details of data storage and retrieval.
- **Data Transfer Object** (design pattern): It is used to transfer data between different components or layers of the system. It is an object that contains only the relevant data that needs to be transmitted and does not contain business logic.

## Testing

- **ObjectMother** (design pattern): Is used in testing to create and provide pre-configured objects for use in unit tests. It allows for the easy creation of test objects with predefined properties and values, reducing duplication and making tests more readable and maintainable..
- **Fake Mock**: Is a type of test where fake objects are used instead of real dependencies.
    
    *for example*: 

    Instead of using a real database or external system for user data, you would use the InMemoryUserRepository as a fake object. 
    
    By using the InMemoryUserRepository as a fake mock in your tests, you can ensure that your test cases are isolated, controlled, and predictable.

## Endpoints

Below are the endpoints available in this version of the project:

- **POST** - /api/v1/users - Create a user.
    
    ```json
    {
        "name": "alex",
        "surname": "perez",
        "age": 32,
        "email": "mail@gmail.com"
    }
    ```
