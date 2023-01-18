// initial values
let num1 = undefined;
let num2 = undefined;
let solution = undefined;
let operator = undefined;

const operators = document.querySelectorAll('.operator'); // selects all operator buttons
const numbers = document.querySelectorAll('.number'); // selects all number buttons
const equal = document.querySelector('.equal'); // selects equal button
const clear = document.querySelector('.clear'); // selects clear button
const display = document.querySelector('.display'); // grabs the display to apply changes
// initial values

// event listeners
operators.forEach(operator => operator.addEventListener('click', displayOperator)); // looks for clicks on operator buttons
numbers.forEach(number => number.addEventListener('click', displayNumber)); // looks for clicks on number buttons
equal.addEventListener('click', callOperate); // looks for clicks on equal button
clear.addEventListener('click', clearAll); // adds click listener to clear button
// event listeners

// clears all
function clearAll() {
    resetValues();
    solution = undefined;
    display.textContent = '0';
}
// clears all

// clears working values
function resetValues() {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    clearOperator()
}
// clears working values

// clears the highlighted operator
function clearOperator() {
    operators.forEach(operator => operator.classList.remove('pressed'));
}
// clears the highlighted operator

// calls the operate function if nums and operator are defined
function callOperate() {

    if (operator !== undefined
    && num1 !== undefined
    && num2 !== undefined) {

        operate(operator, Number(num1), Number(num2));
    }
};
// calls the operate function if nums and operator are defined

// calls math function depending on the operator chosen
function operate(operator, num1, num2) {

    if (operator === 'add') {
        add(num1, num2);

    } else if (operator === 'subtract') {
        subtract(num1, num2);

    } else if (operator === 'multiply') {
        multiply(num1, num2);

    } else if (operator === 'divide') {
        divide(num1, num2);
    }
}
// calls math function depending on the operator chosen

// math functions
function add(num1, num2) {
    solution = num1 + num2;
    display.textContent = solution;
    clearOperator();
}

function subtract(num1, num2) {
    solution = num1 - num2;
    display.textContent = solution;
    clearOperator();
}

function multiply(num1, num2) {
    solution = num1 * num2;
    display.textContent = solution;
    clearOperator();
}

function divide(num1, num2) {
    solution = num1 / num2;
    display.textContent = solution;
    clearOperator();
}
// math functions

function displayOperator() {

    // check if operators contain class
    //if oper

    callOperate(operator, num1, num2);

    clearOperator()
    this.classList.add('pressed');

    operator = this.id; // sets the operator
}
//

// places numbers in the display

function displayNumber() { // places the number in the display

    const numberSelection =  this.textContent; // grabs the number of the button

    if (operator === undefined) {

        if (display.textContent === '0') { // replaces zero with selected number in display

            display.textContent = numberSelection;

        } else { // if anything else is in the display, appends the number selction in the display

            display.textContent += numberSelection;

        }

        num1 = Number(display.textContent); // sets the first number variable to the display value

    } else { // if there is an operator selected

        if (display.textContent == num1
            || display.textContent === '0') { // replaces num1 or 0 with new number

            display.textContent = numberSelection;

        } else { // if anything else is in the display, appends the number selction in the display

            display.textContent += numberSelection;

        }

        num2 = Number(display.textContent);

    }

}
// places numbers in the display