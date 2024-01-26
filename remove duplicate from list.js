function distinct(a) {
  //   let emptyArray = [];
  //   for (let i = 0; i < a.length; i++) {
  //     if (!emptyArray.includes(a[i])) {
  //       emptyArray.push(a[i]);
  //     }
  //     // if (emptyArray.indexOf(a[i]) == -1) {
  //     //   emptyArray.push(a[i]);
  //     // }
  //   }
  //   return emptyArray;
  let uniqueObj = new Set(a);
  return [...uniqueObj];
}
console.log(distinct([1, 1, 2, 2, 3, 3, 4, 4]));
