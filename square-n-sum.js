function square(numbers) {
  //   let result = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     result += numbers[i] * numbers[i];
  //   }
  //   return result;
  return numbers.map((n) => n * n).reduce((acc, current) => acc + current);
}

console.log(square([1, 2, 2]));
