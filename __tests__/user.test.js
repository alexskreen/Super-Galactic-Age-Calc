import { User } from "./../src/sgac2.js";
import { exportAllDeclaration } from "@babel/types";

describe("User", () => {
  test("should create new user from user class", () => {
    const user = new User("alex", 30);
    expect(user.age).toEqual(30);
  });

  test("should calculate user age on Earth", () => {
    const user = new User("alex", 30);
    expect(user.earthAge()).toEqual(user.age);
  });

  test("should calculate user age on Mercury", () => {
    const user = new User("alex", 30);
    expect(user.mercuryAge()).toEqual(user.age * (.24));
  });
});
