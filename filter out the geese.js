function gooseFilter(birds) {
  var geese = ["african", "roman Tufted", "toulouse", "pilgrim"];
  var unique = birds.filter((bird) => {
    return !geese.includes(bird);
  });
  return unique;
}

console.log(
  gooseFilter([
    "s",
    "t",
    "e",
    "d",
    "k",
    "african",
    "roman Tufted",
    "toulouse",
    "pilgrim",
  ])
);
