
// this section places operators in the display
const operators = document.querySelectorAll('.operator'); // selects all operator buttons

operators.forEach(operator => operator.addEventListener('click', displayOperator)); // looks for clicks on operator buttons

function displayOperator() { // places the operator in the display

    const operatorSelection = this.textContent; // grabs the operator type

    const display = document.querySelector('.display'); // grabs the display to apply changes

    if (display.textContent !== '0'
        && display.textContent.includes('+') === false
        && display.textContent.includes('-') === false
        && display.textContent.includes('*') === false
        && display.textContent.includes('÷') === false) {

        display.textContent += operatorSelection;
    }

}
// this section places operators in the display

// this section places numbers in the display
const numbers = document.querySelectorAll('.number'); // selects all number buttons

numbers.forEach(number => number.addEventListener('click', displayNumber)); // looks for clicks on number buttons

function displayNumber() { // places the number in the display

    const numberSelection =  this.textContent; // grabs the number of the button

    const display = document.querySelector('.display'); // grabs the display to apply changes

    if(display.textContent === '0'){ // if display is empty or reset, sets display to new number

        display.textContent = numberSelection;

    } else { // if anything else is in the display, appends the number selction in the display

        display.textContent += numberSelection;
    }
}
// this section places numbers in the display

// calls simple math function depending on the operator chosen
function operate(operator, num, num2) {

    if (operator === "add") {
        add(num, num2);

    } else if (operator === "subract") {
        subtract(num, num2);

    } else if (operator === "multiply") {
        multiply(num, num2);

    } else if (operator === "divide") {
        divide(num, num2);
    }
}
// calls simple math function depending on the operator chosen

// simple math functions
function add(num, num2) {
    return num + num2;
}

function subtract(num, num2) {
    return num - num2;
}

function multiply(num, num2) {
    return num * num2;
}

function divide(num, num2) {
    return num / num2;
}
// simple math functions