let number1;
let number2;
let operator;
let valuesArray = [];
let displayValues = " ";

//add event listener to buttons
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        //add user input intto an array
        valuesArray.push(button.id);
        //display array (input of user)
        document.querySelector("#display").textContent = valuesArray.join(" ");

    });
});







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
        case "divide":
            divide(number1, number2);
            break;
        default:
            console.log("sorry operator not available")
    }
}

