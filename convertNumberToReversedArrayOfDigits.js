function digitize(n) {
    return n.toString().split("").map((m)=> Number(m)).reverse();
}
console.log(digitize(123456789));