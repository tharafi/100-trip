function fakeBin(x) {
  //   let string = [];
  //   for (let i = 0; i < x.length; i++) {
  //     if (x[i] < 5) {
  //       string.push(0);
  //     } else if (x[i] >= 5) {
  //       string.push(1);
  //     }
  //   }
  //   return string.join("");
  //   return x
  //     .split("")
  //     .map((x) => (x < 5 ? "0" : "1"))
  //     .join("");
  return x.replace(/[1-4]/g, "0").replace(/[5-9]/g, "1");
}

console.log(fakeBin("123456789"));
