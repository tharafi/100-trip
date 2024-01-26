function filter_list(l) {
  //   let arr = [];
  //   for (let i = 0; i < l.length; i++) {
  //     if (Number(l[i])) {
  //       arr.push(l[i]);
  //     }
  //   }
  //   return arr;
  return l.filter((ele) => Number(ele));
}

console.log(filter_list([1, 2, "a", "b"]));
