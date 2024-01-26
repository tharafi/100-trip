function position (letter) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    // for(let i=0 ; i<alphabet.length; i++) {
    //     if (letter === alphabet[i]) return i+1;
    // }
    return alphabet.indexOf(letter) + 1;
}

console.log(position("z"))