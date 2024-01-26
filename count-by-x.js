
// create empty array 
// loop though n 
// multi n*x 
// add to new array 
// return new array 



function countBy(x, n) {
    // let z = [];
    // for(let i = 1; i <= n ; i++) {
    //     z.push(i * x);
    // }
    // return z;
    return Array.from(Array(n+1).keys()).slice(1).map((number) => number * x);
}

console.log(countBy(2,5));