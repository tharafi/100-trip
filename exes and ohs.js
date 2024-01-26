function XO(str) {
  return (
    str.toLowerCase().match(/x/g || [])?.length ==
    str.toLowerCase().match(/o/g || [])?.length
  );
}

console.log(XO("xoxX"));
