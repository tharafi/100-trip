function sumMix(x) {
  //   let sum = 0;
  //   for (let i = 0; i < x.length; i++) {
  //     sum += Number(x[i]);
  //   }
  //   return sum;
  return x.map((x) => +x).reduce((acc, current) => acc + current);
}

console.log(sumMix([3, "9", 5, "10", "13", 5]));
