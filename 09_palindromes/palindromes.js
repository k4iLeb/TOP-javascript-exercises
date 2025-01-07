const palindromes = function (str) {
  let regex = /[a-z0-9]/;
  str = str
    .toLowerCase()
    .split("")
    .filter((letter) => regex.test(letter))
    .join("");
  let testStr = str.split("").reverse().join("");

  return str === testStr;
};

// console.log(palindromes("A car, a man, a maraca"));
// console.log(palindromes("Animal loots foliated detail of stool lamina"));

// Do not edit below this line
module.exports = palindromes;
