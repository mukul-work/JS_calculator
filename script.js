const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digit");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equals");
const operatorBtn = document.querySelectorAll(".operator");

let num1 = "";
let num2 = "";
let operator = "";
let currOp = null;
let resetDisplay = false;

function updateDisplay(num){
    display.textContent = num || "0";
}

function manageDigits(event){
    if(resetDisplay){
        display.textContent = "";
        resetDisplay = false;
    }

    display.textContent += event.target.textContent;
}

function manageOperators(event){
    if(currOp !== null) evaluate();

    num1 = display.textContent;
    currOp = event.target.textContent;
    resetDisplay = true;
}

function evaluate(){
    if(currOp === null) return;

    num2 = display.textContent;

    const result = operate(Number(num1), Number(num2), currOp);

    updateDisplay(result);
    currOp = null;
    resetDisplay=true;

}

function clearCalc(){
    num1 = "";
    num2 = "";
    currOp = null;
    updateDisplay("0");
}

function add(num1, num2){
    return (num1 + num2);
}

function subtract(num1, num2){
    return (num1 - num2);
}

function multiply(num1, num2){
    return (num1 * num2);
}

function divide(num1, num2){
    if(num2 == 0){
        return "Division by zero is not possible";
    }
    else{
        return (num1 / num2);
    }
}


function operate(num1, num2, operator){
    if(operator == '+'){
        return add(num1, num2);
    }
    else if(operator == '-'){
        return subtract(num1, num2);
    }
    else if(operator == '*'){
        return multiply(num1, num2);
    }
    else if(operator == '/'){
        return divide(num1, num2);
    }
    else{
        alert('Please choose a valid operator');
    }
}

digits.forEach(btn => {
    btn.addEventListener("click", manageDigits);
})

operatorBtn.forEach(btn => {
    btn.addEventListener("click", manageOperators);
})

equalBtn.addEventListener("click", evaluate);
clearBtn.addEventListener("click", clearCalc);