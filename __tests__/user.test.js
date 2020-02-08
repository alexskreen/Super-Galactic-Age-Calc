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
    expect(user.smoker).toEqual("blah");
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

});
