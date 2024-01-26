function invert(array) {
    // let emptyArray = [];
    // for (let i=0; i< array.length; i++) {
    //     emptyArray[i]= -array[i];
        // emptyArray.push(array[i] * -1); // another solution
    // }
    // return emptyArray;
    return array.map((x) => x * -1);
}

console.log(invert([-1,2,3,4,5,6]))