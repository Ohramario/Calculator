let number1;
let number2;
let operator;

function add(n1, n2) {
    return n1 + n2;
}
function subtract(n1, n2) {
    return n1 - n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function divide(n1, n2) {
    return n1 / n2;
}
function operate(number1, number2, operator) {
    switch (operator) {
        case "add":
            add(number1, number2);
            break;
        case "multiply":
            multiply(number1, number2);
            break;
        case "substract":
        subtract(number1, number2);
            break;

        case divide(number1, number2){
            divide(number1, number2);
            break;
        }
        default: 
        console.log("sorry operator not available")

    }
}

console.log(subtract(1, 2));