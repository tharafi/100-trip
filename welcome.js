function great(language) {
    const object = {
        english: "welcome",
        arabic: "مرحبا",
        french: "bienvenue"
    }
    if(object.hasOwnProperty(language)) {
        return object[language];
    } else {
        return object["english"];
    }
}

console.log(great("arabic"));