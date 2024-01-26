function accum(s) {
  return s
    .split("")
    .map((x, i) => x.toUpperCase() + x.repeat(i))
    .join("-");
}

console.log(accum("abcd"));
