export class User {
  constructor(name, age, smoker, drinker) {
    this.name = name;
    this.age = age;
    this.smoker = smoker;
    this.drinker = drinker;
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

  marsAge() {
    if (this.age > 0) {
      let marsAge = (this.age * (1.88));
      return marsAge;
    } else if (this.age <= 0) {
      return "error. Please submit real age";
    }
  }

  jupiterAge() {
    if (this.age > 0) {
      let jupiterAge = (this.age * (11.86));
      return jupiterAge;
    } else if (this.age <= 0) {
      return "error. Please submit real age";
    }
  }
  
}