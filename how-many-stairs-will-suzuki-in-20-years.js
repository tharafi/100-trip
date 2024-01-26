function stairsIn20(s) {
  //   let newArray = 0;
  //   for (let i = 0; i < s.length; i++) {
  //     newArray += s[i[i]];
  //   }
  //   return newArray;
  return s
    .reduce((arr, day) => arr.concat(day))
    .reduce((acc, current) => acc + current);
}
console.log(stairsIn20([([1, 2, 3], [1, 2, 3], [1, 2, 3])]));
