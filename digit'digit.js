function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map((x) => Number(Math.pow(x, 2)))
      .join("")
  );
}

console.log(squareDigits(3212));
