

function xor (a, b) {
    // if (a == true && b == true) return false;
    // if(a== false && b == false) return false;
    // if(( a == true || b == true ) && (a == false || b == false) ) return true;
    return a === b ? false : true;
}

console.log(xor(false, false));