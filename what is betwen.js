function between(a, b) {
  //   let arr = [];
  //   for (let i = a; i <= b; i++) {
  //     arr.push(i);
  //   }
  //   return arr;
  return Array(b - a + 1)
    .fill(a)
    .map((n, i) => n + i);
}

console.log(between(-2, 2));
