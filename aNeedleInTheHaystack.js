function findNeedle(haystack) {
  // for (let index = 0; index < haystack.length; index++) {
  //     if(haystack[index] == "needle") {
  //         return " needle in index : "+ index;
  //     }

  // }
  return " needle in index : " + haystack.indexOf("needle");
}
console.log(findNeedle([0, 5, 1, 2, 3, "needle"]));
