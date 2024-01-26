function removeExclamation(s) {
    // let newArray=[];
    // for(let i=0; i< s.length; i++) {
    //     if(s[i] !== "!") {
    //         newArray.push(s[i]);
    //     }
    // }
    // return newArray.join("");
    // return s.replace(/!/g, "");
    return s.split("").filter((e) => e !== "!").join("")
}

console.log(removeExclamation("hello! world!"))