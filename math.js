export function add(num1, num2) {
    return num1 + num2;
}
  
export function subtract(num1, num2) {
    return num2 - num1;
}
  
export function multiply(num1, num2) {
    return num2 * num1;
}
  
export function power(num, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
      result *= num;
    }
    return result;
}
  
export function abs(num) {
    if (num < 0) {
      return -num;
    }
    return num;
}
  
export function mod(num1, num2) {
    while (num1 >= num2) {
      num1 -= num2;
    }
    return num1;
}
  
export function fac(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    return num * fac(num - 1);
}
  
export function round(num) {
    let ip = num | 0; //int w/o decimal
    let dp = num - ip; //decimal
  
    if (dp >= 0.5) {
      return ip + 1;
    } else {
      return ip;
    }
}
  
export function ceil(num) {
    let ip = num | 0;
    let dp = num - ip;

    if (dp > 0) {
      return ip + 1;
    } else {
      return ip;
    }
}
  
export function floor(num) {
    return num | 0; 
}