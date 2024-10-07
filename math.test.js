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

describe('Math Functions', () => {
  // Tests for integer-based functions
  describe('Integer Functions', () => {
    it('should add two numbers correctly', () => {
      expect(add(3, 5)).toBe(8);
      expect(add(-3, 5)).toBe(2);
      expect(add(0, 0)).toBe(0);
      expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    });

    it('should subtract two numbers correctly', () => {
      expect(subtract(7, 3)).toBe(4);
      expect(subtract(3, 7)).toBe(-4);
      expect(subtract(0, 0)).toBe(0);
      expect(subtract(-3, -7)).toBe(4);
    });

    it('should multiply two numbers correctly', () => {
      expect(multiply(4, 6)).toBe(24);
      expect(multiply(4, 0)).toBe(0);
      expect(multiply(-4, 6)).toBe(-24);
      expect(multiply(Number.MAX_SAFE_INTEGER, 2)).toBe(Number.MAX_SAFE_INTEGER * 2);
    });

    it('should calculate the power of a number correctly', () => {
      expect(power(2, 3)).toBe(8);
      expect(power(2, 0)).toBe(1);
      expect(power(0, 3)).toBe(0);
      expect(power(-2, 3)).toBe(-8);
    });

    it('should calculate the absolute value of a number correctly', () => {
      expect(abs(-5)).toBe(5);
      expect(abs(5)).toBe(5);
      expect(abs(0)).toBe(0);
    });

    it('should calculate the modulo of two numbers correctly', () => {
      expect(mod(7, 3)).toBe(1);
      expect(mod(7, 7)).toBe(0);
      expect(mod(7, 0)).toBe(NaN); // Handle division by zero
    });

    it('should calculate the factorial of a number correctly', () => {
      expect(fac(5)).toBe(120);
      expect(fac(0)).toBe(1);
      expect(fac(1)).toBe(1);
      expect(fac(10)).toBe(3628800);
    });
  });

  // Tests for decimal-based functions
  describe('Decimal Functions', () => {
    it('should round a number to the nearest integer', () => {
      expect(round(3.7)).toBe(4);
      expect(round(3.4)).toBe(3);
      expect(round(0.5)).toBe(1);
      expect(round(-0.5)).toBe(-1);
    });

    it('should calculate the ceiling of a number correctly', () => {
      expect(ceil(3.2)).toBe(4);
      expect(ceil(4)).toBe(4);
      expect(ceil(-3.2)).toBe(-3);
    });

    it('should calculate the floor of a number correctly', () => {
      expect(floor(3.9)).toBe(3);
      expect(floor(4)).toBe(4);
      expect(floor(-3.9)).toBe(-4);
    });
  });
});
