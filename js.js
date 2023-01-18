// initial values
let input1 = undefined;
let input2 = undefined;
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
    input1 = undefined;
    input2 = undefined;
    operator = undefined;
    clearOperator()
}
// clears working values

// clears the highlighted operator
function clearOperator() {
    operators.forEach(operator => operator.classList.remove('pressed'));
    operator = undefined;
}
// clears the highlighted operator

// calls the operate function if nums and operator are defined
function callOperate() {

    if (operator !== undefined
    && input1 !== undefined
    && input2 !== undefined) {

        operate(operator, Number(input1), Number(input2));
    }

    clearOperator();

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
        if (num2 === 0) {
            alert('THIS IS NOT THE WAY');
            clearAll();
            return;
        }
        divide(num1, num2);
    }
}
// calls math function depending on the operator chosen

// math functions
function add(num1, num2) {
    solution = num1 + num2;
    display.textContent = solution;
    input1 = solution;
    input2 = undefined;
}

function subtract(num1, num2) {
    solution = num1 - num2;
    display.textContent = solution;
    input1 = solution;
    input2 = undefined;
}

function multiply(num1, num2) {
    solution = num1 * num2;
    display.textContent = solution;
    input1 = solution;
    input2 = undefined;
}

function divide(num1, num2) {
    solution = num1 / num2;
    display.textContent = solution;
    input1 = solution;
    input2 = undefined;
}
// math functions

// sets new operator and calls function if one is already selected
function displayOperator() {

    callOperate(operator, input1, input2);

    this.classList.add('pressed');

    operator = this.id; // sets the operator
}
// sets new operator and calls function if one is already selected

// places numbers in the display and sets values for operation
function displayNumber() {

    const numberSelection =  this.textContent; // grabs the number of the button

    if (numberSelection === '.' && display.textContent.includes('.')){ // does not allow multiple decimals in an input
        return;
    }

    if (operator === undefined) {

        if (display.textContent === '0') { // replaces zero with selected number in display

            display.textContent = numberSelection;

        } else { // if anything else is in the display, appends the number selction in the display

            display.textContent += numberSelection;

        }

        input1 = display.textContent; // sets the first number variable to the display value

    } else { // if there is an operator selected

        if (display.textContent == input1
            || display.textContent === '0') { // replaces input1 or 0 with new number

            display.textContent = numberSelection;

        } else { // if anything else is in the display, appends the number selction in the display

            display.textContent += numberSelection;

        }

        input2 = display.textContent;

    }

}
// places numbers in the display and sets values for operation