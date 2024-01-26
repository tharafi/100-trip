function firstConsecutive (arr) {
    for( let i = 0 /* i=1*/ ; i < arr.length ; i++) {
        if( arr[i + 1] !== arr[i] + 1 ) {
        // if( arr[i]-1 !== arr[i-1]) {
            return arr[i+1];
        }
    }
            return null;
}

console.log(firstConsecutive([1, 2, 3, 4, 6, 7, 8]));