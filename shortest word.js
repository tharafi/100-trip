function findShort(s) {
  //   let str = s.split(" ");
  //   let letter = [];
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i.length] < str[(i + 1).length]) {
  //       letter.push(str[i]);
  //     } else {
  //       letter.push(str[i]);
  //     }
  //   }
  //   return letter;
  return Math.min(...s.split(" ").map((letter) => letter.length));
}
console.log(findShort("hello my name: sliman"));
