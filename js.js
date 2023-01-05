
//

//

// clears the display
document.querySelector('.clear').addEventListener('click', clearDisplay); // adds click listener to clear button

function clearDisplay() { // resets display to 0

    document.querySelector('.display').textContent = '0';
}
// clears the display

// places operators in the  --- UPDATE TO CALL OPERATE FUNCTION WHEN SECOND OPERATOR IS PRESSED 
const operators = document.querySelectorAll('.operator'); // selects all operator buttons

operators.forEach(operator => operator.addEventListener('click', displayOperator)); // looks for clicks on operator buttons

function displayOperator() { // identifies the operator and 

    this.classList.add('pressed');

    const operatorSelection = this.id; // grabs the operator type

    console.log(operatorSelection);

    const display = document.querySelector('.display'); // grabs the display to apply changes

    if (display.textContent !== '0') { // does not add operator to 0

    //     display.textContent += operatorSelection;
        }

}
// places operators in the display

// places numbers in the display
const numbers = document.querySelectorAll('.number'); // selects all number buttons

numbers.forEach(number => number.addEventListener('click', displayNumber)); // looks for clicks on number buttons

function displayNumber() { // places the number in the display

    const numberSelection =  this.textContent; // grabs the number of the button

    const display = document.querySelector('.display'); // grabs the display to apply changes

    const operatorCheck = (document.getElementsByClassName('pressed')); // creates an array of active operators to check if one is pressed

    console.log(operatorCheck);

    if(display.textContent === '0'
        || operatorCheck.length !== 0) { // if display is empty/reset/an operator is selected, sets display to new number

        display.textContent = numberSelection;

    } else { // if anything else is in the display, appends the number selction in the display

        display.textContent += numberSelection;
    }
}
// places numbers in the display

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