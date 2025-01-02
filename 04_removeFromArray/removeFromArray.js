const removeFromArray = function (arr, ...args) {
  // const args = Array.prototype.slice.call(arguments, 1);
  console.log(args);

  // for (let num of args) {
  //   arr = arr.filter((x) => x !== num);
  // }

  arr = arr.filter((item) => !args.includes(item));
  console.log(arr);

  return arr;
};
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
// Do not edit below this line
module.exports = removeFromArray;
