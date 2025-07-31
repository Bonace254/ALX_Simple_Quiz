// Arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Divide by 0";
    }
    return num1 / num2;
}

// Utility to get input values
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Display result
function displayResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

// Event listeners
document.getElementById('add').addEventListener('click', function() {
    const [num1, num2] = getInputValues();
    displayResult(add(num1, num2));
});

document.getElementById('subtract').addEventListener('click', function() {
    const [num1, num2] = getInputValues();
    displayResult(subtract(num1, num2));
});

document.getElementById('multiply').addEventListener('click', function() {
    const [num1, num2] = getInputValues();
    displayResult(multiply(num1, num2));
});

document.getElementById('divide').addEventListener('click', function() {
    const [num1, num2] = getInputValues();
    displayResult(divide(num1, num2));
});

