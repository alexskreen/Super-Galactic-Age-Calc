import { User } from './../src/sgac2.js';
import { exportAllDeclaration } from "@babel/types";

describe('User', () => {
  test('should create new user from user class', () => {
    let user = new User("alex", 30);
    expect(user.age).toEqual(30);
  });
});