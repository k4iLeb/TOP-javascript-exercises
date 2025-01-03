const convertToCelsius = function (F) {
  let result = (F - 32) * (5 / 9);
  return Math.round(result * 10) / 10;
};
console.log(convertToCelsius(32));
console.log(convertToCelsius(100));

const convertToFahrenheit = function (C) {
  let result = C * (9 / 5) + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
