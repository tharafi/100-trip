function grow(x) {
  //   let result = 1;
  //   for (let i = 0; i < x.length; i++) {
  //     result *= x[i];
  //   }
  //   return result;
  return x.reduce((acc, current) => acc * current);
}
console.log(grow([1, 2, 3, 4]));
