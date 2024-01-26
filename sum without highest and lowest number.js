function sumArray(array) {
  if (array == null) {
    return 0;
  }
  let height = Math.max(...array);
  let lowest = Math.min(...array);
  return array
    .filter((x) => x !== height && x !== lowest)
    .reduce((acc, current) => acc + current, 0);
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
