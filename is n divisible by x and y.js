function isDivisible(n, x, y) {
  if (n % x === 0 || n % y === 0) {
    return `true become ${n} is divisible by ${x} and ${y}`;
  } else {
    return `false become ${n} is not divisible by ${x} and ${y}`;
  }
}

console.log(isDivisible(100, 5, 3));
