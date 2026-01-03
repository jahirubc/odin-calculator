function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Nice Try";
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return null;
    }
}
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let resultDisplayed = false;
const display = document.getElementById("display");
const digitButtons = document.querySelectorAll(".digit");

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (resultDisplayed) {
            display.textContent = "";
            resultDisplayed = false;
        }
        display.textContent += button.textContent;
    })
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentOperator && display.textContent !== "") {
            // Evaluate previous operation
            secondNumber = Number(display.textContent);
            firstNumber = operate(currentOperator, firstNumber, secondNumber);
            display.textContent = Math.round(firstNumber * 100) / 100;
        } else if (!firstNumber) {
            firstNumber = Number(display.textContent);
        }

        currentOperator = button.textContent;
        display.textContent = ""; // Prepare for next number
    });
});

const equalsBtn = document.getElementById("equals");

equalsBtn.addEventListener("click", () => {
    if (currentOperator && display.textContent !== "") {
        secondNumber = Number(display.textContent);
        firstNumber = operate(currentOperator, firstNumber, secondNumber);
        display.textContent = Math.round(firstNumber * 100) / 100;
        currentOperator = null;
        resultDisplayed = true;
    }
});

const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", () => {
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    resultDisplayed = false;
    display.textContent = "0";
});