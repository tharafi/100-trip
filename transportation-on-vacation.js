function rentalCarCost (d) {
    let price = d * 40;
    // for( let i = 0; i <= d ; i++) {
    //     price = d * 40;
    // }
    if(d >= 7) {
        return price -= 50;
    }
    if( d >= 3) {
        return price -= 20;
    }
    else {
        return price
    }
}

console.log(rentalCarCost(7));