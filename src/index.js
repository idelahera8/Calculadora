// ----------------------------------------------------------------------------
// -------- DECLARE AS CONSTANTS ALL HTML ELEMENTS THAT WILL BE USED ----------
// ----------------------------------------------------------------------------


// Create an object for the text output bar
const textOutput = document.getElementById("textbar")

// Create objects for each number button
const oneButton = document.getElementById("one-btn")
const twoButton = document.getElementById("two-btn")
const threeButton = document.getElementById("three-btn")
const fourButton = document.getElementById("four-btn")
const fiveButton = document.getElementById("five-btn")
const sixButton = document.getElementById("six-btn")
const sevenButton = document.getElementById("seven-btn")
const eightButton = document.getElementById("eight-btn")
const nineButton = document.getElementById("nine-btn")
const zeroButton = document.getElementById("zero-btn")

// Create objects for the period, restart and equal buttons
const periodButton = document.getElementById("period-btn")
const restartButton = document.getElementById("restart-btn")
const equalButton = document.getElementById("equal-btn")

// Create objects for the operation buttons
const addButton = document.getElementById("add-btn")
const substractButton = document.getElementById("substract-btn")
const multiplyButton = document.getElementById("multiply-btn")
const divideButton = document.getElementById("divide-btn")


// ----------------------------------------------------------------------------
// ----- CREATE VARIABLES THAT WILL BE USED IN THE LOGIC OF THE PROBLEM -------
// ----------------------------------------------------------------------------

let result = null
let num1 = null
let num2 = null
let numString = ""

let period = false

let add = false
let substract = false
let multiply = false
let divide = false
let operation = ""


// ----------------------------------------------------------------------------
// ------------------------- ALL EVENT LISTENERS ------------------------------
// ----------------------------------------------------------------------------


oneButton.addEventListener("click", function(){updateNumber("1")})
twoButton.addEventListener("click", function(){updateNumber("2")})
threeButton.addEventListener("click", function(){updateNumber("3")})
fourButton.addEventListener("click", function(){updateNumber("4")})
fiveButton.addEventListener("click", function(){updateNumber("5")})
sixButton.addEventListener("click", function(){updateNumber("6")})
sevenButton.addEventListener("click", function(){updateNumber("7")})
eightButton.addEventListener("click", function(){updateNumber("8")})
nineButton.addEventListener("click", function(){updateNumber("9")})
zeroButton.addEventListener("click", function(){updateNumber("0")})

periodButton.addEventListener("click", periodSelection)

addButton.addEventListener("click", function(){operationsButtons("add")})
substractButton.addEventListener("click", function(){operationsButtons("substract")})
multiplyButton.addEventListener("click", function(){operationsButtons("multiply")})
divideButton.addEventListener("click", function(){operationsButtons("divide")})

equalButton.addEventListener("click", finalResult)

restartButton.addEventListener("click", restartEverything)


// ----------------------------------------------------------------------------
// ---------------- ALL FUNCTIONS REQUIRED FOR THE LOGIC ----------------------
// ----------------------------------------------------------------------------


// Display in the text output whatever number is passed as an argument
function renderNumber(number) {
  textOutput.textContent = number
}

//
function updateNumber(number) {
  // If an operation button is selected, the number being created will be res-
  // tarted and all the operations are also restarted to false
  if (add || substract || multiply || divide) {
    numString = ""
    num1 = 0
    resetOperations()
  }
  // Then, the number being created will be updated with whatever digit has
  // been selected
  numString += number
  num1 = parseFloat(numString)
  renderNumber(num1)
}

// The period is added only if a previous period hasnt been added to the number
// being created
function periodSelection() {
  if (!period) {
    period = true
    numString += "."
  }
}

// Reset all operations to false in order to make sure that only one at a time
// can be set to true
function resetOperations() {
  add = false
  substract = false
  multiply = false
  divide = false
}

function makeOperation() {
  if (operation == "add") {
    result = num2 + num1
  } else if (operation == "substract") {
    result = num2 - num1
  } else if (operation == "multiply") {
    result = num2 * num1
  } else {
    result = num2 / num1
  }
}

function operationsButtons(op) {
  if (operation != ""){
    makeOperation()
    //num2 = result
    renderNumber(result)
  } else {
    num2 = num1
  }
  resetOperations()
  operation = op
  if (op == "add") {
    add = true
  } else if (op == "substract") {
    substract = true
  } else if (op == "multiply") {
    multiply = true
  } else {
    divide = true
  }
  period = false
}

function restartEverything() {
  num1 = 0
  num2 = 0
  result = 0
  numString = ""
  operation = ""
  period = false
  resetOperations()
  renderNumber(num1)
}

function finalResult() {
  makeOperation()
  renderNumber(result)
}
