function isPalindrome(x) {
  //   if (x.toLowerCase() === x.toLowerCase().split("").reverse().join("")) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}

console.log(isPalindrome("AbBa"));
