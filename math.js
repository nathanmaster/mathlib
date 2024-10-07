export function add(num1, num2) {
  return num1 + num2;
}

export function subtract(num1, num2) {
  return num1 - num2;
}

export function multiply(num1, num2) {
  return num1 * num2;
}

export function power(num, power) {
  if (power < 0) {
      return 1 / power(num, -power);
  }
  let result = 1;
  for (let i = 0; i < power; i++) {
      result *= num;
  }
  return result;
}

export function abs(num) {
  return num < 0 ? -num : num;
}

export function mod(num1, num2) {
  if (num2 === 0) return NaN; // Handle division by zero
  const isNegative = num1 < 0;
  num1 = num1 < 0 ? -num1 : num1;
  num2 = num2 < 0 ? -num2 : num2;
  while (num1 >= num2) {
      num1 -= num2;
  }
  return isNegative ? -num1 : num1;
}

export function fac(num) {
  if (num < 0) return NaN; // Handle negative numbers
  if (num === 0 || num === 1) {
      return 1;
  }
  return num * fac(num - 1);
}

export function round(num) {
  let ip = num | 0; // Integer part
  let dp = num - ip; // Decimal part

  if (num < 0) {
      return dp <= -0.5 ? ip - 1 : ip;
  } else {
      return dp >= 0.5 ? ip + 1 : ip;
  }
}

export function ceil(num) {
  let ip = num | 0; // Integer part
  let dp = num - ip; // Decimal part

  if (num < 0) {
      return dp < 0 ? ip : ip;
  } else {
      return dp > 0 ? ip + 1 : ip;
  }
}

export function floor(num) {
  let ip = num | 0; // Integer part
  let dp = num - ip; // Decimal part

  if (num < 0) {
      return dp === 0 ? ip : ip - 1;
  } else {
      return ip;
  }
}

