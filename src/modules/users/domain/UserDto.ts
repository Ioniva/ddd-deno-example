export default class UserDto {
  public name: string;
  public surname: string;
  public age: number;
  public email: string;
  public id?: string;

  constructor(name: string, surname: string, age: number, email: string, id?: string) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
    this.id = id;
  }
}
