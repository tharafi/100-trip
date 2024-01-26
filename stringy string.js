function stringy(size) {
  //   let string = "";
  //   for (let i = 1; i <= size; i++) {
  //     if (i % 2 != 0) {
  //       string += "1";
  //     }
  //     if (i % 2 == 0) {
  //       string += "0";
  //     }
  //   }
  //   return string;
  return Array.from({ length: size }, (_, index) =>
    (index + 1) % 2 === 0 ? "0" : "1"
  ).join("");
}
console.log(stringy(6));
