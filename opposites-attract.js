function loveFunc (flower1, flower2) {
    // if(flower1 % 2 === 0 && flower2 % 2 !== 0
    //     || flower2 % 2 === 0 && flower1 % 2 !== 0) {
    //     return "true if they ari in love";
    // } else {
    //     return " false if they aren't";
    // }
    return flower1 % 2 !== flower2 %2 ;
}

console.log(loveFunc(101,166));