function highAndLow(numbers) {
  let num = numbers.split(" ").map((x) => Number(x));
  let max = Math.max(...num);
  let min = Math.min(...num);
  return `${max} ${min}`;
}

console.log(highAndLow("-1 2 3 4 9"));
