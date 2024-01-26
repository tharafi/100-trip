function findMultiples(integer, limit) {
  let emptyArray = [];
  //   for (let i = 1; i <= limit; i++) {
  //     if (i * integer <= limit) {
  //       emptyArray.push(i * integer);
  //     }
  //   }
  for (let i = integer; i <= limit; i += integer) {
    emptyArray.push(i);
  }
  return emptyArray;
}
console.log(findMultiples(5, 7));
