let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let operation = '';
let num1 = '';
let num2 = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim(); // Get the button text and trim whitespace

        if (value === 'C') {
            display.value = '';
            operation = '';
            num1 = '';
            num2 = '';
        } else if (value === '=') {
            num2 = display.value;
            display.value = calculate(operation, num1, num2);
            operation = '';
            num1 = '';
            num2 = '';
        } else if (['+', '-', '*', '/'].includes(value)) {
            operation = value;
            num1 = display.value;
            display.value = '';
        } else {
            display.value += value;
        }
    });
});

function calculate(operation, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error'; // Handle division by zero
        default:
            return '';
    }
}
