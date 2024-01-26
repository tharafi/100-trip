



function countPositiveSumNegative(input) {
    // let positivesArray = [];
    // let sumNegatives = 0;
    // for (let index = 0; index < input.length; index++) {
    //     if(input[index] > 0) {
    //         positivesArray.push(input[index]);
    //     }else {
    //         sumNegatives += input[index];
    //     }
    // }
    // return [positivesArray.length,sumNegatives];
    let positivesArray = input.filter((x) => x > 0).length;
    let sumNegatives = input.filter((x) => x < 0 ).reduce((acc, current) => acc + current, 0);
    return [positivesArray, sumNegatives]
}

console.log(countPositiveSumNegative([1, 4, 7, 3, -1, -2, -3]));