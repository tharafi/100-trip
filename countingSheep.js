function countSheep (arrayOfSheep) {
    let counter = 0;
    // for(let i=0; i<arrayOfSheep.length; i++) {
    //     if(arrayOfSheep[i] == true) {
    //         counter++;
    //     }
    // }
    arrayOfSheep.map((m) => {
        if(m == true) counter++;
    });
}