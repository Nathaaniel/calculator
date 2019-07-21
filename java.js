//Javascript file
function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    if (b==0) {return "ERR"}
    return a/b
}

function operate(operate, a, b) {
    if (operate == "add") {
        return add(a,b)
    }
    if (operate == "sub") {
        return subtract(a,b)
    }
    if (operate == "mul") {
        return multiply(a,b)
    }
    if (operate == "div") {
        return divide(a,b)
    }
}

function equals(operation, firstNumber, onScreen) {
    if (onScreen == "") {return ""}
    if (firstNumber == "") {return onScreen}
    onScreen = Number(onScreen);
    let answer = operate(operation, firstNumber, onScreen)
    if (answer=="ERR") {}
    else if (answer>999999999) {
        answer = Number.parseFloat(answer).toPrecision(5);
    }
    else {answer = parseFloat(answer.toFixed(7));}
    display.textContent = answer;
    return answer;
}

let onScreen="";

let firstNumber="";

let operation="";

function dot(text) {
    if (text.includes(".")) {return text}
    else {return input (text, ".")}
}


function input(input, a) {
    if (input.length>8) {return input}
    input += a;
    display.textContent = input;
    return input
}

function back(text) {
    if (text.length==1||text=="") {
        return wipe();
    }
    let input = text.substring(0, text.length-1);
    display.textContent = input;
    return input
}

function wipe() {
    input("","0")
    return ""
}

function store(firstOp, firstNumber, onScreen) {
    
    if (!(firstNumber=="")) {
        return equals(firstOp, firstNumber, onScreen)
    }
    let convNumb =  Number(onScreen);
    return convNumb
}


const display = document.querySelector('#display');







