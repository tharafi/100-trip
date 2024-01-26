function twoDecimalPlaces (n) {
    // return Math.round(n*100) / 100;
    return n.toFixed(2);
}

console.log(twoDecimalPlaces(5.55555))