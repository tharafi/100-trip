function array(string) {
  //   if (!string || string.length < 3) {
  //     return null;
  //   }
  return string.split(",").slice(1, -1).join(" ");
}
console.log(array("A1,B2,C3,D4,E5"));
console.log(array("A,1,23,456,78,9,2"));
console.log(array("1,2,3,4"));
console.log(array("1,4"));
