function billboard(name, price = 30) {
  return name
    .split("")
    .map((x) => (x = price))
    .reduce((acc, current) => acc + current);
}
console.log(billboard("Jeong-Ho Aristotelis"));
