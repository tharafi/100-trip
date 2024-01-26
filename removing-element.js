function removeEveryOther (arr) {
    // let newArray = [];
    // for(let i=0; i<arr.length; i++) {
    //     if(i%2 === 0) {
    //         newArray.push(arr[i])
    //     }
    // }
    // return newArray;
    return arr.filter((a,i) => i%2 == 0)
}

console.log(removeEveryOther(["keep", "remove", "keep", "remove", "keep"]));