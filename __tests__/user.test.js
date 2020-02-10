import { User } from "./../src/sgac2.js";
import { exportAllDeclaration } from "@babel/types";

describe("User", () => {
  test("should create new user from user class and test their age.", () => {
    const user = new User("alex", 30, "no");
    expect(user.age).toEqual(30);
  });

  test("should create new user from user class and test their name.", () => {
    const user = new User("alex", 30, "no");
    expect(user.name).toEqual("alex");
  });

  test("should create new user from user class and test if they are a smoker", () => {
    const user = new User("alex", 30, "no");
    expect(user.smoker).toEqual("no");
  });

  test("should create new user from user class and test if they are a drinker", () => {
    const user = new User("alex", 30, "no", "yes");
    expect(user.drinker).toEqual("yes");
  });

  test("should create new user from user class and test if they eat fast food", () => {
    const user = new User("alex", 30, "no", "yes", "no");
    expect(user.fastFood).toEqual("no");
  });

  test("should create new user from user class and test if they exercise", () => {
    const user = new User("alex", 30, "no", "yes", "no", 5)
    expect(user.exercise).toEqual(5);
  });

  test("should calculate user age on Earth", () => {
    const user = new User("alex", 30);
    expect(user.earthAge()).toEqual(user.age);
  });

  test("should calculate user age on Mercury", () => {
    const user = new User("alex", 30);
    expect(user.mercuryAge()).toEqual(user.age * (.24));
  });

  test("should calculate user age on Venus", () => {
    const user = new User("alex", 30);
    expect(user.venusAge()).toEqual(user.age * (.62));
  });

  test("should calculate user age on Mars", () => {
    const user = new User("alex", 30);
    expect(user.marsAge()).toEqual(user.age * (1.88));
  });

  test("should calculate user age on Jupiter", () => {
    const user = new User("alex", 30);
    expect(user.jupiterAge()).toEqual(user.age * (11.86));
  });

  test ("Should calculate life expectency on earth based off smoking status", () => {
    const user = new User ("alex", 31, "no", "yes", "no", 7)
    expect(user.lifeExpectancy()).toEqual(101);
  });

  test ("Should calculate life expectency on earth based off drinking status", () => {
    const user = new User ("alex", 31, "no", "yes", "no", 5)
    expect(user.lifeExpectancy()).toEqual(99);
  });

  test ("Should calculate life expectency on earth based off fast food status", () => {
    const user = new User ("alex", 31, "no", "yes", "yes", 3)
    expect(user.lifeExpectancy()).toEqual(92);
  });

  test ("Should calculate life expectency on earth based off workouts per week status", () => {
    const user = new User ("alex", 31, "no", "yes", "yes", 0)
    expect(user.lifeExpectancy()).toEqual(75);
  });

  test ("Should calculate life expectency on earth based off workouts per week status (first else if)", () => {
    const user = new User ("alex", 31, "no", "no", "no", 7)
    expect(user.lifeExpectancy()).toEqual(111);
  });

  test ("Should alert user they have outlived their estimated life expectancy", () => {
    const user = new User ("alex", 120, "no", "no", "no", 7)
    expect(user.lifeExpectancy()).toEqual("blah");
  });

  test ("should calculate remaining years on earth", () => {
    const user = new User ("alex", 31, "no", "no", "no", 0);
    expect(user.earthYearsLeft()).toEqual(59);
  });

  test ("should calculate remaining years on mercury", () => {
    const user = new User ("alex", 31, "no", "no", "no", 0);
    expect(user.mercuryYearsLeft()).toEqual(14.159999999999998);
  });

  test ("should calculate remaining years on venus", () => {
    const user = new User ("alex", 31, "no", "no", "no", 0);
    expect(user.venusYearsLeft()).toEqual(36.58);
  });

  test ("should calculate remaining years on mars", () => {
    const user = new User ("alex", 31, "no", "no", "no", 0);
    expect(user.marsYearsLeft()).toEqual(110.91999999999999);
  });

  test ("should calculate remaining years on jupiter", () => {
    const user = new User ("alex", 31, "no", "no", "no", 0);
    expect(user.jupiterYearsLeft()).toEqual(699.7399999999999);
  });

});
