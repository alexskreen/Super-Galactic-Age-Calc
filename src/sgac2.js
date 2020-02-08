export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  earthAge() {
    if (this.age > 0) {
      let userEarthAge = (this.age * 1);
      return userEarthAge;
    } else if (this.age <= 0) {
      return "error. Please submit real age";
    }
  }
}
