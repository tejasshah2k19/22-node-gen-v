function addition(a,b) {
    let c = a + b
    console.log("addition = ", c)
}

function subtraction(a,b) {
    c = a - b
    return c
}


module.exports.add = addition 
module.exports.subtraction = subtraction


// console.log(module);
