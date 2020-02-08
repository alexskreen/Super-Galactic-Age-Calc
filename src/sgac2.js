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

  mercuryAge() {
    if (this.age > 0) {
      let userMercuryAge = (this.age * (.24));
      return userMercuryAge;
    } else if (this.age <= 0) {
      return "error. Please submit real age";
    }
  }

  venusAge() {
    if (this.age > 0) {
      let userVenusAge = (this.age * (.62));
      return userVenusAge;
    } else if (this.age <= 0) {
      return "error. Please submit real age";
    }
  }
  
}
