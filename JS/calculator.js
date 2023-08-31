let number1;
let number2;
let operator;
let operatorIndex;
let valuesArray = [];
let display = document.querySelector("#display");
let solution = "empty";

//add event listener to buttons
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        // clear previous soluton
        if (solution != "empty"){
            valuesArray = [];
            clearDisplay();
            solution = "empty";
        }
        //add user input into an array, exluding clear
        valuesArray.push(check(button.id));
        //checks what needs to be done
        findAction(button.id);
    });
});

function findAction(action) {
    switch (action) {
        case "clear":
            valuesArray = [];
            clearDisplay();
            break;
        case "=":
            getNum2();
            operate(number1, number2, operator);
            break;
        default:
            //see if operator inputed
            findOperator(valuesArray);
            //display array (input of user)
            display.textContent = valuesArray.join(" ");
    }
}

function findOperator(array) {
    //find the operator and number1
    valuesArray.forEach((number) => {
        if (isNaN(number)) {
            operatorIndex = valuesArray.indexOf(number);
            operator = valuesArray[operatorIndex];
            number1 = getNum1(operatorIndex);
        }
    })
}
function getNum2() {
    let newNum = valuesArray.slice(operatorIndex + 1, valuesArray.length - 1).join("");
    number2 = Number(newNum);
}

function getNum1(index) {
    let newNumber = valuesArray.slice(0, index).join("");
    return Number(newNumber);
}
function clearDisplay() {
    display.textContent = "";
}

//checks for clear
function check(input) {
    if (input != "clear") {
        return input;
    }
}
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

function showResult(number) {
    solution = number;
    document.getElementById("display").innerHTML = solution;
}

function operate(number1, number2, operator) {
    switch (operator) {
        case "+":
            showResult(add(number1, number2));
            break;
        case "*":
            showResult(multiply(number1, number2));
            break;
        case "-":
            showResult(subtract(number1, number2));
            break;
        case "/":
            showResult(divide(number1, number2));
            break;
        default:
            console.log("sorry operator not available")
    }
}

