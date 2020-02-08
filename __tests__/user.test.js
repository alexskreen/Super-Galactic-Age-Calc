import { User } from './../src/sgac2.js';
import { exportAllDeclaration } from "@babel/types";

describe('User', () => {
  test('should create new user from user class', () => {
    const user = new User("alex", 30);
    expect(user.age).toEqual(30);
  });

  test('should calculate user age on earth', () => {
    let user = new User("alex", 30);
    expect(user.earthAge()).toEqual("blah");
    console.log(this.earthAge)
    console.log(earthAge);
  })
});