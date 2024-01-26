var summation = function (num) {
  //   let sum = 0;
  //   for (let i = 0; i <= num; i++) {
  //     sum += i;
  //   }
  //   return sum;
  return Array(num)
    .fill(true)
    .reduce((acc, current, index) => acc + index + 1, 0);
};

console.log(summation(8));
