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
    } else if (this.exercise > 0 && this.exercise <= 2) {
      lifeExpectancy += 5
    } else if (this.exercise > 2 && this.exercise < 4) {
      lifeExpectancy += 7
    } else if (this.exercise > 4 && this.exercise < 6) {
      lifeExpectancy += 9
    } else if (this.exercise === 7) {
      lifeExpectancy += 11
    } else if (this.exercise > 7) {
      return "Well, that's impossible"
    }
    return lifeExpectancy
  }
  earthYearsLeft() {
    let that = this;
    let userEarthYearsLeft = (that.lifeExpectancy() - that.earthAge()); 
   return userEarthYearsLeft;
  }

  mercuryYearsLeft() {
    let that = this;
    let userMercuryYearsLeft = ((that.lifeExpectancy()*.24) - (that.earthAge()*.24)); 
   return userMercuryYearsLeft;
  }

  venusYearsLeft() {
    let that = this;
    let userVenusyearsLeft = ((that.lifeExpectancy()*.62) - (that.earthAge()*.62)); 
   return userVenusyearsLeft;
  }

  marsYearsLeft() {
    let that = this;
    let usermarsyearsLeft = ((that.lifeExpectancy()*1.88) - (that.earthAge()*1.88)); 
   return usermarsyearsLeft;
  }

  jupiterYearsLeft() {
    let that = this;
    let userjupiteryearsLeft = ((that.lifeExpectancy()*11.86) - (that.earthAge()*11.86)); 
   return userjupiteryearsLeft;
  }

}