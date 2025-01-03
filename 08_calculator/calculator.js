const add = function (a, b) {
  return (result = a + b);
};

const subtract = function (a, b) {
  return (result = a - b);
};

const sum = function (...args) {
  let nums = args.flat();
  let count = 0;
  for (let num of nums) {
    count += num;
  }

  return count;
};
const multiply = function (...args) {
  let nums = args.flat();
  let count = 1;
  for (let num of nums) {
    count *= num;
  }
  return count;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let count = 1;
  for (let i = num; i > 0; i--) {
    count *= i;
  }
  return count;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
