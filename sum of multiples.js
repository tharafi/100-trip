function sumMul(n, m) {
  let emptyArray = [];
  for (let i = n; i <= m; i += n) {
    emptyArray.push(i);
  }
  return emptyArray.reduce((acc, current) => acc + current);
}
console.log(sumMul(3, 13));
