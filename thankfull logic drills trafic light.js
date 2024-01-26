function upDateLight(current) {
  let arr = ["green", "yellow", "red"];
  //   for (let i = 0; i < arr.length; i++) {
  //     if ((current = arr[i])) {
  //       return arr[i + 1];
  //     } else if (arr[current] === 2) {
  //       return "green";
  //     }
  //   }
  if (current == "green") return "yellow";
  if (current == "yellow") return "red";
  if (current == "red") return "green";
}

console.log(upDateLight("red"));
