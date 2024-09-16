function add(x,y) {
    return x + y
}

function subtract(x,y) {
    return x - y
}

function multiply(x,y) {
    return x * y
}

function divide(x,y) {
    return x / y
}

/*
let numberOne = a
let numberTwo = b
let operator = "+"
*/

function operate(operator, x, y) {
    if (operator === "+") {
        return add(x,y)
    }
    else if (operator === "-") {
        return subtract(x,y)
    }
    else if (operator === "*") {
        return multiply(x,y)
    }
    else if (operator === "/") {
        return divide(x,y)
    }
}

const buttonContainer = document.querySelector('.buttonContainer')

for (let i = 1; i < 20; i++) {
    newDiv = document.createElement('button')
    if (i === 4 || i === 8 || i === 12 || i === 16
        || i === 19 ) {
            newDiv.classList.add('operator')
        }
    else if (i === 1 || i === 2 || i === 3) {
        newDiv.classList.add('blue')
    }
    else if (i === 17) {
        newDiv.classList.add('zero')
        newDiv.textContent = '0'
    }
    else {
        newDiv.classList.add('cell')
    }
    buttonContainer.appendChild(newDiv)
}
