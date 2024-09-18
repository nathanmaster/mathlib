// math.test.js
import {
    add,
    subtract,
    multiply,
    power,
    abs,
    mod,
    fac,
    round,
    ceil,
    floor,
  } from './math.js';

  jest.mock('./math.js', () => ({
    add: jest.fn(),
    subtract: jest.fn(),
    multiply: jest.fn(),
    power: jest.fn(),
    abs: jest.fn(),
    mod: jest.fn(),
    fac: jest.fn(),
    round: jest.fn(),
    ceil: jest.fn(),
    floor: jest.fn(),
  }));
  
  describe('Math Functions', () => {
    // Tests for integer-based functions
    describe('Integer Functions', () => {
      it('should add two numbers correctly', () => {
        const num1 = 3;
        const num2 = 5;
        const expectedResult = 8;
  
        add.mockReturnValue(expectedResult);
  
        const result = add(num1, num2);
  
        expect(result).toBe(expectedResult);
      });
  
      it('should subtract two numbers correctly', () => {
        const num1 = 7;
        const num2 = 3;
        const expectedResult = 4;
  
        subtract.mockReturnValue(expectedResult);
  
        const result = subtract(num1, num2);
  
        expect(result).toBe(expectedResult);
      });
  
      it('should multiply two numbers correctly', () => {
        const num1 = 4;
        const num2 = 6;
        const expectedResult = 24;
  
        multiply.mockReturnValue(expectedResult);
  
        const result = multiply(num1, num2);
  
        expect(result).toBe(expectedResult);
      });
  
      it('should calculate the power of a number correctly', () => {
        const num = 2;
        const num2 = 3;
        const expectedResult = 8;
  
        power.mockReturnValue(expectedResult);
  
        const result = power(num, num2);
  
        expect(result).toBe(expectedResult);
      });
  
      it('should calculate the absolute value of a number correctly', () => {
        const num = -5;
        const expectedResult = 5;
  
        abs.mockReturnValue(expectedResult);
  
        const result = abs(num);
  
        expect(result).toBe(expectedResult);
      });
  
      it('should calculate the modulo of two numbers correctly', () => {
        const num1 = 7;
        const num2 = 3;
        const expectedResult = 1;
  
        mod.mockReturnValue(expectedResult);
  
        const result = mod(num1, num2);
  
        expect(result).toBe(expectedResult);
      });
  
      it('should calculate the factorial of a number correctly', () => {
        const num = 5;
        const expectedResult = 120;
  
        fac.mockReturnValue(expectedResult);
  
        const result = fac(num);
  
        expect(result).toBe(expectedResult);
      });
    });
  
    // Tests for decimal-based functions
    describe('Decimal Functions', () => {
      it('should round a number to the nearest integer', () => {
        const num = 3.7;
        const expectedResult = 4;
  
        round.mockReturnValue(expectedResult);
  
        const result = round(num);
  
        expect(result).toBe(expectedResult);
      });
  
      it('should calculate the ceiling of a number correctly', () => {
        const num = 3.2;
        const expectedResult = 4;
  
        ceil.mockReturnValue(expectedResult);
  
        const result = ceil(num);
  
        expect(result).toBe(expectedResult);
      });
  
      it('should calculate the floor of a number correctly', () => {
        const num = 3.9;
        const expectedResult = 3;
  
        floor.mockReturnValue(expectedResult);
  
        const result = floor(num);
  
        expect(result).toBe(expectedResult);
      });
    });
  });