const display = document.querySelector('span')
const buttons = document.querySelectorAll('button')

let result = 0;
const operands = ['+', '-', '*', '/']

//input numbers, decimals and operons 
const displayNumber = (num) => {
    const currentInput = display.textContent;
    display.textContent = currentInput === '0' ? num : currentInput + num
}

const displayOperand = (oper) => {
    const currentInput = display.textContent;
    if (currentInput !== '0') {
        if (!operands.includes(currentInput[currentInput.length-1])) {
            display.textContent = currentInput + oper
        }
    }
}

const displayDecimal = (dec) => {
    const currentInput = display.textContent;
    if (!currentInput.includes('.')) {
        if (currentInput === '0') {
            display.textContent = '0.'
        } else { 
            display.textContent = currentInput + dec
        }
    } else if (operands.includes(currentInput[currentInput.length-1])) {
            display.textContent = currentInput + '0.'
    } else {
            display.textContent = currentInput
    }
}

const clearDisplay = () => {
    display.textContent = 0;
}

const evaluate = () => {
    result = display.textContent
    let evaluatedResult = Function('return ' + result)();
    display.textContent = evaluatedResult;
}


//event listeners 
buttons.forEach(button => {
    if (button.classList.contains('number')) {
        button.addEventListener('click', () => displayNumber(button.value));
    } else if (button.classList.contains('operand')) {
        button.addEventListener('click', () => displayOperand(button.value));
    } else if (button.classList.contains('decimal')) {
        button.addEventListener('click', () => displayDecimal(button.value))
    } else if (button.classList.contains('clear')) {
        button.addEventListener('click', () => clearDisplay())
    } else if (button.classList.contains('equals')) {
        button.addEventListener('click', () => evaluate())
    }
})

