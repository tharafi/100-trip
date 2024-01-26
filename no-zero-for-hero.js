function noBoringZeros (n) {
    // let str = n.toString();
    let str = String(n);
    // while(str.lastIndexOf(0) === str.length -1) { 
    while ( str.endsWith(0)) {
        str = str.slice(0, str.length-1);
    }
    return Number(str)
}

console.log(noBoringZeros(1001000));