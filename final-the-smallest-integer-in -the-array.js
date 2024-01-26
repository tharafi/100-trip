class smallestInteger {
  findSmallestInt(args) {
    // let result;
    // for (let i = 0; i < args.length; i++) {
    //   if (args[i] < args[i + 1]) {
    //     result = args[i];
    //   } else if (args[i] > args[i + 1]) {
    //     result = args[i + 1];
    //   }
    // }
    // return result;
    return Math.min(...args);
  }
}
let x = new smallestInteger();
console.log(x.findSmallestInt([34, -345, -1, 200]));
