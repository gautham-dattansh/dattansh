// Variables to store the calculation inputs
let firstNumber = null;
let secondNumber = null;
let operator = null;

function inputNumber(number) {
    const resultBox = document.getElementById('resultBox');

    // If operator is not set, store the first number; otherwise, store the second number
    if (operator === null) {
        firstNumber = (firstNumber === null) ? number : firstNumber * 10 + number;
        resultBox.textContent = firstNumber;
    } else {
        secondNumber = (secondNumber === null) ? number : secondNumber * 10 + number;
        resultBox.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    }
}

function setOperator(op) {
    // Only set the operator if firstNumber is defined
    if (firstNumber !== null) {
        operator = op;
        document.getElementById('resultBox').textContent = `${firstNumber} ${operator}`;
    }
}

function calculateResult() {
    const resultBox = document.getElementById('resultBox');
    let result = null;

    if (firstNumber !== null && operator && secondNumber !== null) {
        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = secondNumber !== 0 ? (firstNumber / secondNumber).toFixed(2) : 'Error';
                break;
            default:
                result = 'Invalid operation';
        }

        // Display the result and reset for new calculation
        resultBox.textContent = `Result: ${result}`;
        resetCalculator();
    }
}

function clearInput() {
    resetCalculator();
    document.getElementById('resultBox').textContent = 'Enter your calculation';
}

function resetCalculator() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
}
