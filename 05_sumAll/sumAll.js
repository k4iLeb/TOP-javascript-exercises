const sumAll = function (a, b) {
  if (a >= 0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b)) {
    const [min, max] = [a, b].sort((a, b) => a - b);
    let arr = [];
    for (let i = min; i <= max; i++) {
      arr.push(i);
    }

    let count = 0;
    arr.forEach((x) => (count += x));
    console.log(count);

    return count;
  } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
