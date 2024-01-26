function getCount(str) {
  let alphabet = "aeiuo";
  //   let count = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     if (alphabet.includes(str[i])) {
  //       count++;
  //     }
  //   }
  //   return count;
  return str
    .replaceAll(" ", "")
    .split("")
    .filter((letter) => alphabet.includes(letter)).length;
}
console.log(getCount("hello my name is ahmed"));
