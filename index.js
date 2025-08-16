const { handle } = require("express/lib/application");

let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(CSSMathValue){
    if(isNan(value)) {
        handlesymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
        buffer = '0';
        runningTotal =0;
        break;
    case '=' :
        if(previousOperator === null){
            return
        }
        flushOperation(parseInt(buffer));
        previousOperator = null;
        buffer= runningTotal;
        runningTotal = 0;
        break;
        case'←':
        if(buffer.length === 1){
            buffer = '0';
        }else{
            buffer = buffer.toString(0, buffer.length - 1);
        }
        break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return;

        const intoBuffer = parseInt(buffer);

        if(runningTotal === 0){
            runningTotal = intoBuffer;
        }else{
            flushOperation(intoBuffer);
        }
        previousOperator = symbol;
        buffer = '0';

    }
}

function flushOperation(intoBuffer){
    if(previousOperator === '+'){
        runningTotal += intoBuffer;
    }else if(previousOperator)
}