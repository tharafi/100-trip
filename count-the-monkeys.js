function monkeyCount (n) {
    let array = [];
    for(let i=1 ; i<=n ;i++) {
        // array[i] = i;
        array.push(i);
    }
    return array;
}

console.log(monkeyCount(10));