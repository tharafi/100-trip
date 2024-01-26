function descendingOrder(n) {
  let arr = [];
  return Number(
    n
      .toString()
      .split("")
      .sort() // .sort((a, b) => b - a)
      .reverse()
      .join("")
  );
}
console.log(descendingOrder(123456789));
