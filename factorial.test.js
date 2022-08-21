import {factorial, iteratingFactorial} from "./factorial.js";

describe('A factorial function', () => {
  
  it('computes factorials', () => {
    expect(factorial(5)).toBe(120);
  });

  it('computes factorials', () => {
    expect(iteratingFactorial(5)).toBe(120);
  });

});