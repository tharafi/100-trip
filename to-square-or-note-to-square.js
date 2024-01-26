// loop 
// check square or not
// return newArray

function squareOrSquareRoot(array) {
    // let newArray = [];
    // for(let i=0; i< array.length; i++) {
    //     if(Number.isInteger(Math.sqrt(array[i]))) {
    //         newArray.push(Math.sqrt(array[i]));
    //     } else {
    //         newArray.push(array[i] * array[i]);
    //     }
    // }
    // return newArray;
    array.map((number) => Number.isInteger(Math.sqrt(number) ? Math.sqrt(number) : number * number));
}

console.log(squareOrSquareRoot([1,2,4,7,8,9,5]));