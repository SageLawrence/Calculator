
// this function calls each simple math function depending on the operator chosen
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
// this function calls each simple math function depending on the operator chosen

// this section contains simple math functions
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
// this section contains simple math functions