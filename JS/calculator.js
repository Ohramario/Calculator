let number1;
let number2;
let operator;
let valuesArray = [];

//add event listener to buttons
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
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
            operate(number1, number2, action)
            break;
        default:
            //see if operator inputed
            findOperator(valuesArray);
            //display array (input of user)
            document.querySelector("#display").textContent = valuesArray.join(" ");
    }
}

function findOperator(array) {
    //find the operator
    valuesArray.forEach((number) => {
        if (isNaN(number)) {
            let index = valuesArray.indexOf(number);
            operator = valuesArray[index];
            number1 = getNum1(index);
        }
    })
}

function getNum1(index) {
    let newNumber = valuesArray.slice(0, index).join("");
    return Number(newNumber);
}
function clearDisplay() {
    document.querySelector("#display").textContent = "";
}

/*function clearDisplay() {
    const clear = document.getElementById("clear");
    clear.addEventListener("click", () => {
        document.querySelector("#display").textContent = "";

    })
}
*/
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
    document.getElementById("display").innerHTML = number;
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

