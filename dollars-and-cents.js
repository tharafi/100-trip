function formatMoney(amount) {
    // return "$" + amount.toFixed(2);
    return `$ ${amount.toFixed(2)}`
}

console.log(formatMoney(3.12));