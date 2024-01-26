function positiveSum (arr) {
    return arr.filter((x) => x > 0)
    .reduce((acc, current) => acc + current, 0);

    // let sum = 0;
    // for (let index = 0; index < arr.length; index++) {
    //     if( arr[index] > 0) {
    //         sum += arr[index];
    //     }
    // }
    // return sum;
}

let array = [1, -4, -7, 12];
console.log(positiveSum(array));