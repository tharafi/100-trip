function betterThanAverage(classPoints, yourPoints) {
  let average =
    classPoints.reduce((acc, current) => acc + current, 0) / classPoints.length;
  return yourPoints > average;
}

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
