function greet (name) {
    // if(name === "Johnny") { 
    //     return "hello, my love!";
    // }
    // return "Hello, " + name + "!";
    return name === "Johnny" ? "hello, my love!" : "Hello, " + name + "!";
}
console.log(greet("Johnny"));