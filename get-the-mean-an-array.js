function getAverage (marks) {
    // let sum = 0;
    // for(let i = 0; i< marks.length; i++) {
    //     sum += marks[i]; 
    // }
    // return Math.floor(sum / marks.length);
    return marks.reduce((acc, current) => acc + current,0)/ marks.length;
}

console.log(getAverage([1,2,3,4,5,]));