function find_average(array) {
    if(array === null || array.length === 0) return 0
    // return  array.reduce((acc, crr) => acc + current,0)/ array.length;
    let sum = 0;
    for(let i = 0; i< array.length; i++) {
        sum +=  array[i];
    }
    return sum / array.length;
}

console.log(find_average([1,2,3,4]));