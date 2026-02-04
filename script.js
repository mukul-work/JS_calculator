const parser = new exprEval.Parser();

const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digit");
const decimal = document.querySelector("#decimal");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equals");
const operatorBtn = document.querySelectorAll(".operator");

let operator = "";
let isOperator = false;
let isDecimal = false;
let resetDisplay = true;
let expression = "";


function updateDisplay(text){
    display.textContent = text || "0";
}

function manageDigits(event){
    if(resetDisplay){
        display.textContent = "";
    }
    expression += event.target.textContent;
    display.textContent += event.target.textContent;
    isOperator = false;
    resetDisplay = false;
}

function manageOperators(event){
    if(isOperator) return;
    expression += event.target.textContent;
    display.textContent += event.target.textContent;
    isOperator = true;
    isDecimal = false;
}

function manageDecimal(event){
    if(isDecimal) return;
    expression += event.target.textContent;
    display.textContent += event.target.textContent;
    isDecimal = true;
}

function evaluate(){
    let result = parser.evaluate(expression);
    result = Math.round(result*1000)/1000;
    updateDisplay(result);
    expression = String(result);
    currOp = null;


}

function clearCalc(){
    currOp = null;
    updateDisplay("0");
}

digits.forEach(btn => {
    btn.addEventListener("click", manageDigits);
})

operatorBtn.forEach(btn => {
    btn.addEventListener("click", manageOperators);
})

decimal.addEventListener("click", manageDecimal);

equalBtn.addEventListener("click", evaluate);
clearBtn.addEventListener("click", clearCalc);