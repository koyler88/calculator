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

function formatAnswer(answer) {
    wholeNumberLength = Math.round(answer).toString().length
    if (wholeNumberLength > 12) {
        return "Error"
    }
    if (wholeNumberLength === 12) {
        return Math.round(answer).toString()
    }
    if (answer.toString().length > 12 && wholeNumberLength < 12) {
        answer = answer.toFixed(11-wholeNumberLength)
    }
    return answer

}
function add(x,y) {
    return parseFloat(x) + parseFloat(y)
}

function subtract(x,y) {
    return parseFloat(x) - parseFloat(y)
}

function multiply(x,y) {
    return parseFloat(x) * parseFloat(y)
}

function divide(x,y) {
    return parseFloat(x) / parseFloat(y)
}



function operate(operator, x, y) {
    if (operator === "add") {
        return add(x,y)
    }
    else if (operator === "subtract") {
        return subtract(x,y)
    }
    else if (operator === "multiply") {
        return multiply(x,y)
    }
    else if (operator === "divide") {
        return divide(x,y)
    }
}

const display = document.querySelector(".display")

const clear = document.querySelector(".clear")

clear.addEventListener('click', () => {
    display.textContent = 0;
    displayValue = ''
    firstNumber = null
    secondNumber = null
    operator = ''
})

const plusMinus = document.querySelector(".plusMinus")
plusMinus.addEventListener('click', () => {
    display.textContent = display.textContent * -1
    displayValue = displayValue * -1
})

const percentage = document.querySelector(".percentage")
percentage.addEventListener('click', () => {
    display.textContent = display.textContent / 100
    displayValue = displayValue / 100
})


const decimal = document.querySelector(".decimal")
decimal.value = "."

decimal.addEventListener('click', (e) => {
    element = e.target
    if (displayValue.includes(".")) {
    }
    else if (displayValue === '') {
        displayValue = 0
        displayValue += element.value
        display.textContent = displayValue;
    }
    else {
        displayValue += element.value
        display.textContent = displayValue;
    }
})

const numbers = document.querySelectorAll(".number")

numbers.forEach(button =>  button.addEventListener('click', (e) => {
    element = e.target
    if (displayValue.length === 12) {
    }
    else {
        if (operation === 'operated') {
            displayValue = ''
            operation = ''
        }
        displayValue += element.value
        display.textContent = displayValue;
    }
    
}))

firstNumber = null
operation = ''
secondNumber = null
displayValue = ''

const division = document.querySelector(".divide")
const multiplication = document.querySelector(".multiply")
const subtraction = document.querySelector(".minus")
const addition = document.querySelector(".plus")
const equal = document.querySelector(".equals")

addition.addEventListener('click', () => {
    if (firstNumber === null) {
        if (displayValue === '') {

        }
        else {
            firstNumber = displayValue;
            displayValue = ''
            operation = "add"
        }
        
    }
    else {
        if (displayValue === '') {
                operation = "add"
        }
        else {
            secondNumber = displayValue;
            display.textContent = operate(operation, firstNumber,secondNumber)
            firstNumber = operate(operation, firstNumber,secondNumber)
            displayValue = ''
            operation = 'add'
        }
        
    }
})

subtraction.addEventListener('click', () => {
    if (firstNumber === null) {
        if (displayValue === '') {

        }
        else {
            firstNumber = displayValue;
            displayValue = ''
            operation = "subtract"
        }
    }
    else {
        if (displayValue === '') {
            operation = "subtract"
        }
        else {
            secondNumber = displayValue;
        display.textContent = operate(operation, firstNumber,secondNumber)
        firstNumber = operate(operation, firstNumber,secondNumber)
        displayValue = ''
        operation = 'subtract'
        }
        
    }
})

multiplication.addEventListener('click', () => {
    if (firstNumber === null) {
        if (displayValue === '') {

        }
        else {
            firstNumber = displayValue;
            displayValue = ''
            operation = "multiply"
        }
    }
    else {
        if (displayValue === '') {
            operation = "multiply"
        }
        else {
            secondNumber = displayValue;
        display.textContent = operate(operation, firstNumber,secondNumber)
        firstNumber = operate(operation, firstNumber,secondNumber)
        displayValue = ''
        operation = 'multiply'
        }
        
    }
})

division.addEventListener('click', () => {
    if (firstNumber === null) {
        if (displayValue === '') {

        }
        else {
            firstNumber = displayValue;
            displayValue = ''
            operation = "divide"
        }
    }
    else {
        if (displayValue === '') {
            operation = "divide"
        }
        else {
            secondNumber = displayValue;
        display.textContent = operate(operation, firstNumber,secondNumber)
        firstNumber = operate(operation, firstNumber,secondNumber)
        displayValue = ''
        operation = 'divide'
        }
        
    }
})

equal.addEventListener('click', () => {
    secondNumber = displayValue
    if (firstNumber === null) {

    }
    else if (displayValue === '') {
        secondNumber = firstNumber
        if (operation === 'add') {
            displayValue = add(firstNumber,secondNumber)
            display.textContent = formatAnswer(displayValue)
            firstNumber = null
        }
        if (operation === 'multiply') {
            displayValue = multiply(firstNumber,secondNumber)
            display.textContent = formatAnswer(displayValue)
            firstNumber = null
        }
        if (operation === 'subtract') {
            displayValue = subtract(firstNumber,secondNumber)
            display.textContent = formatAnswer(displayValue)
            firstNumber = null
        }
        if (operation === 'divide') {
            if (secondNumber === '0'){
                return "Nice try bucko"
            }
            else {
                displayValue = divide(firstNumber,secondNumber)
                display.textContent = formatAnswer(displayValue)
                firstNumber = null
            }
        }
    }
    else {
        if (operation === 'add') {
            displayValue = add(firstNumber,secondNumber)
            display.textContent = formatAnswer(displayValue)
            firstNumber = null
        }
        if (operation === 'multiply') {
            displayValue = multiply(firstNumber,secondNumber)
            display.textContent = formatAnswer(displayValue)
            firstNumber = null
        }
        if (operation === 'subtract') {
            displayValue = subtract(firstNumber,secondNumber)
            display.textContent = formatAnswer(displayValue)
            firstNumber = null
        }
        if (operation === 'divide') {
            if (secondNumber === '0'){
                return "Nice try bucko"
            }
            else {
                displayValue = divide(firstNumber,secondNumber)
                display.textContent = formatAnswer(displayValue)
                firstNumber = null
            }
        }
    }
    operation = 'operated'
})
