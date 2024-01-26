function removeChar(str) {
  //   let string = Array(str);
  //   let newString = [];
  //   let start = string[0];
  //   let end = string.length - 1;
  //   for (let i = 0; i < string.length; i++) {
  //     if (string[i] !== start && string[i] !== end) {
  //       newString.push(string[i]);
  //     }
  return str.slice(1, -1);
}
console.log(removeChar("sliman"));
