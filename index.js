var readline = require("readline-sync");

// get number 
var valueOne = readline.question ("Enter first value ");
var valueTwo = readline.question ("Enter second value ");


// get operator 
var getOperator = () => {
    operator = readline.question ("enter valid operator ");
}
// calc 
var calc = () => {
    if (operator === "+") {
        var result = parseInt(valueOne) + parseInt(valueTwo) ;
        console.log("The result is " + result)

    } else if (operator === "-") {
        var result = parseInt(valueOne) - parseInt(valueTwo) ;
        console.log("The result is " + result)
    } else if (operator === "/") {
        var result = parseInt(valueOne) / parseInt(valueTwo) ;
        console.log("The result is " + result)
    }else if (operator === "*") {
        var result = parseInt(valueOne) * parseInt(valueTwo) ;
        console.log("The result is " + result)
    } else {
        console.log("invalid operator")
    }
}
getOperator()
calc()