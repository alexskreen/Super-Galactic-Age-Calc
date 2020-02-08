export class User {
  constructor(name, age, smoker, drinker, fastFood, exercise) {
    this.name = name;
    this.age = age;
    this.smoker = smoker;
    this.drinker = drinker;
    this.fastFood = fastFood;
    this.exercise = exercise;
  }

  earthAge() {
    if (this.age > 0) {
      let userEarthAge = this.age * 1;
      return userEarthAge;
    } else if (this.age <= 0) {
      return "error. Please submit real age";
    }
  }

  mercuryAge() {
    if (this.age > 0) {
      let userMercuryAge = this.age * 0.24;
      return userMercuryAge;
    } else if (this.age <= 0) {
      return "error. Please submit real age";
    }
  }

  venusAge() {
    if (this.age > 0) {
      let userVenusAge = this.age * 0.62;
      return userVenusAge;
    } else if (this.age <= 0) {
      return "error. Please submit real age";
    }
  }

  marsAge() {
    if (this.age > 0) {
      let marsAge = this.age * 1.88;
      return marsAge;
    } else if (this.age <= 0) {
      return "error. Please submit real age";
    }
  }

  jupiterAge() {
    if (this.age > 0) {
      let jupiterAge = this.age * 11.86;
      return jupiterAge;
    } else if (this.age <= 0) {
      return "error. Please submit real age";
    }
  }

  lifeExpectancy() {
    let lifeExpectancy = 100;
    if (this.smoker === "yes") {
      lifeExpectancy -= 20;
    }

    if (this.drinker === "yes") {
      lifeExpectancy -= 10;
    }

    if (this.fastFood === "yes") {
      lifeExpectancy -= 5;
    }

    if (this.exercise === 0) {
      lifeExpectancy -= 10;
      return lifeExpectancy
    } else if (this.exercise > 0 && this.exercise < 2) {
      lifeExpectancy += 5
      // return lifeExpectancy
    } else if (this.exercise > 2 && this.exercise < 4) {
      lifeExpectancy += 7
      // return lifeExpectancy
    } else if (this.exercise > 4 && this.exercise < 6) {
      lifeExpectancy += 9
      // return lifeExpectancy
    } else if (this.exercise === 7) {
      lifeExpectancy += 11
      // return lifeExpectancy
    } else if (this.exercise > 7) {
      return "Well, that's impossible"
      // return lifeExpectancy
    }
  }
}