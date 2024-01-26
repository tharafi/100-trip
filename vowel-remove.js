function shortcut (string) {
    // let lowercase = "aeiou";
    // let newArray= [];
    // for(let i= 0 ; i< string.length; i++) {
    //     if(!lowercase.includes(string[i])) {
    //         newArray.push(string[i]);
    //     }
    // }
    // return newArray.join("");
    return string.replace(/[aeoui]/g,"")
}
console.log(shortcut("hello"))