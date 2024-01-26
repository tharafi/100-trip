function index(array, n) {
  //   for (let i = 0; i < array.length; i++) {
  //     if (i == n) {
  //       return Math.pow(array[i], n);
  //     }
  //   }
  return array.length - 1 < n ? -1 : Math.pow(array[n], n);
}
console.log(index([1, 2], 3));
