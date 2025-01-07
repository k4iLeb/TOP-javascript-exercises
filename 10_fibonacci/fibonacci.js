const fibonacci = function (arg) {
  if (arg == 0) return 0;
  if (arg < 0) return "OOPS";
  let num = +arg;
  let arr = [1, 1];
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[num - 1];
};

fibonacci(10);

// Do not edit below this line
module.exports = fibonacci;
