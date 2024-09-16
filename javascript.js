function add(x,y) {
    return parseInt(x) + parseInt(y)
}

function subtract(x,y) {
    return parseInt(x) - parseInt(y)
}

function multiply(x,y) {
    return parseInt(x) * parseInt(y)
}

function divide(x,y) {
    return parseInt(x) / parseInt(y)
}



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

const display = document.querySelector(".display")

displayValue = ''

const clear = document.querySelector(".clear")

clear.addEventListener('click', () => {
    display.textContent = 0;
    displayValue = ''
})

const plusMinus = document.querySelector(".plusMinus")
const percentage = document.querySelector(".percentage")

const numberZero = document.querySelector(".zero")
numberZero.value = 0
const numberOne = document.querySelector(".one")
numberOne.value = 1
const numberTwo = document.querySelector(".two")
numberTwo.value = 2
const numberThree = document.querySelector(".three")
numberThree.value = 3
const numberFour = document.querySelector(".four")
numberFour.value = 4
const numberFive = document.querySelector(".five")
numberFive.value = 5
const numberSix = document.querySelector(".six")
numberSix.value = 6
const numberSeven = document.querySelector(".seven")
numberSeven.value = 7
const numberEight = document.querySelector(".eight")
numberEight.value = 8
const numberNine = document.querySelector(".nine")
numberNine.value = 9

const numbers = document.querySelectorAll(".number")

numbers.forEach(button =>  button.addEventListener('click', (e) => {
    element = e.target
    displayValue += element.value
    display.textContent = parseInt(displayValue);
}))

firstNumber = 0
operation = ''
secondNumber = 0

const division = document.querySelector(".divide")
const multiplication = document.querySelector(".multiply")
const subtraction = document.querySelector(".minus")
const addition = document.querySelector(".plus")
const equal = document.querySelector(".equals")

addition.addEventListener('click', () => {
    firstNumber = displayValue;
    displayValue = ''
    operation = "add"
})

subtraction.addEventListener('click', () => {
    firstNumber = displayValue;
    displayValue = ''
    operation = 'subtract'
})

multiplication.addEventListener('click', () => {
    firstNumber = displayValue;
    displayValue = ''
    operation = 'multiply'
})

division.addEventListener('click', () => {
    firstNumber = displayValue;
    displayValue = ''
    operation = 'divide'
})

equal.addEventListener('click', () => {
    secondNumber = displayValue
    if (operation === 'add') {
        display.textContent = add(firstNumber,secondNumber)
        displayValue = display.textContent
    }
    if (operation === 'multiply') {
        display.textContent = multiply(firstNumber,secondNumber)
        displayValue = display.textContent
    }
    if (operation === 'subtract') {
        display.textContent = subtract(firstNumber,secondNumber)
        displayValue = display.textContent
    }
    if (operation === 'divide') {
        display.textContent = divide(firstNumber,secondNumber)
        displayValue = display.textContent
    }
    operation = ''
})








