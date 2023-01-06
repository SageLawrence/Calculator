// initial values
let num1 = undefined;
let num2 = undefined;
let solution = undefined;
let operator = undefined;

const display = document.querySelector('.display'); // grabs the display to apply changes
const operators = document.querySelectorAll('.operator'); // selects all operator buttons
const numbers = document.querySelectorAll('.number'); // selects all number buttons
const equal = document.querySelector('.equal'); // selects equal button
// initial values

// event listeners
document.querySelector('.clear').addEventListener('click', clearDisplay); // adds click listener to clear button
operators.forEach(operator => operator.addEventListener('click', displayOperator)); // looks for clicks on operator buttons
numbers.forEach(number => number.addEventListener('click', displayNumber)); // looks for clicks on number buttons
// event listeners

// clears all
function clearDisplay() { // resets display and values
    resetValues();
    solution = undefined;
    display.textContent = '0';
}
// clears all

// 


function displayOperator() { // 

    if (operator !== undefined
        && num1 !== undefined
        && num2 !== undefined) {
        operate(operator, num1, num2);
    }

    operators.forEach(operator => operator.classList.remove('pressed'));

    this.classList.add('pressed');

    operator = this.id; // sets the operator
    console.log(operator);

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
        console.log(num2);

    }

}
// places numbers in the display

equal.addEventListener('click', callOperate); // looks for clicks on equal button

function callOperate() {

    if (operator !== undefined
    && num1 !== undefined
    && num2 !== undefined) {

        operate(operator, num1, num2);

    }

};

// calls simple math function depending on the operator chosen
function operate(operator, num1, num2) {

    if (operator === 'add') {
        display.textcontent = add(num1, num2); // find out why this isn't working

    } else if (operator === 'subract') {
        subtract(num1, num2);

    } else if (operator === 'multiply') {
        multiply(num1, num2);

    } else if (operator === 'divide') {
        divide(num1, num2);
    }
}
// calls simple math function depending on the operator chosen


// simple math functions
function add(num1, num2) {
    solution = num1 + num2;
    console.log(solution);
}

function subtract(num1, num2) {
    solution = num1 - num2;
}

function multiply(num1, num2) {
    solution = num1 * num2;
}

function divide(num1, num2) {
    solution = num1 / num2;
}
// simple math functions

function resetValues() { // resets num and operator values
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    operators.forEach(operator => operator.classList.remove('pressed'));
}