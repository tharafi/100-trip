function areYouPlayingBanjo(name) {
    // if(name[0]=== "R" || name[0] === "r") {
    //     return `${name} plays banjo`;
    //     return name + " plays banjo";
    // } else {
    //     return "does not play banjo";
    // }
    // -----------------
    // if(name.charAt(0)=== "r" || name.charAt(0) === "R") {
    //     return ` ${name} plays banjo`
    // } else {
    //     return ` ${name} does not play banjo`
    // }
    // ------------------------
    return (/^r/i).test(name) ? ` ${name} plays banjo` : ` ${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("rami"));