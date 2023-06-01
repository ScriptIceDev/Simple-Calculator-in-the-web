let display = document.getElementById('display');
let equation = '';

function clearDisplay() {
    display.value = '';
    equation = '';
}

function appendNumber(number) {
    display.value += number;
    equation += number;
}

function appendOperator(operator) {
    display.value += operator;
    equation += operator;
}

function calculate() {
    let result = eval(equation);
    display.value = result;
    equation = result;
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.calculator').classList.toggle('dark-mode');
}
