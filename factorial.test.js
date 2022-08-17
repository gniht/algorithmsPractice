import {factorial} from "./factorial.js";

describe('A factorial function', () => {
  it('computes factorials', () => {
    expect(factorial(5)).toBe(120);
  });
})