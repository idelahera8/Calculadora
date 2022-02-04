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


// Create flags for each operation, plus a variable that will retain the selec-
// ted operation
let add = false
let substract = false
let multiply = false
let divide = false
let operation = ""

// Create a flag to know if the period has been selected or not
let period = false

// Create variables that will contain the number being created (num), the num-
// ber being created in String form (numString) and the stored value (result)
let num = 0
let numString = ""
let result = 0


// ----------------------------------------------------------------------------
// ---------------- ALL FUNCTIONS REQUIRED FOR THE LOGIC ----------------------
// ----------------------------------------------------------------------------


// Set all operation flags to false
function resetOperations() {
  add = false
  substract = false
  multiply = false
  divide = false
}

// Function that displays the number in the Text Output
function renderNumber(number) {
  textOutput.textContent = number
}

// Function that adds the last selected digit to the existing number
function updateNumber(number) {
  if (add || substract || multiply || divide) {
    result = num
    num = 0
    numString = ""
    period = false
    resetOperations()
  }
  numString += number
  num = parseFloat(numString)
  renderNumber(num)
  console.log(num)
  console.log(result)
}

// All event listeners for the number buttons. When selected, the Function
// updateNumber() is called
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

// Event listener to explain what happens when the period button is selected.
// If period button hasnt been selected yet, a period is added to the number
periodButton.addEventListener("click", function() {
  if (!period) {
    period = true
    numString += "."
  }
})

//
addButton.addEventListener("click", function() {
  resetOperations()
  add = true
  operation = "add"
})

substractButton.addEventListener("click", function() {
  resetOperations()
  substract = true
  operation = "substract"
})

multiplyButton.addEventListener("click", function() {
  resetOperations()
  multiply = true
  operation = "multiply"
})

divideButton.addEventListener("click", function() {
  resetOperations()
  divide = true
  operation = "divide"
})


equalButton.addEventListener("click", function() {
  if (operation == "add") {
    result += num
    num = result
    period = false
    renderNumber(result)
  } else if (operation == "substract") {
    result -= num
    num = result
    period = false
    renderNumber(result)
  } else if (operation == "multiply") {
    result *= num
    num = result
    period = false
    renderNumber(result)
  } else if (operation == "divide") {
    result /= num
    num = result
    period = false
    renderNumber(result)
  }
})

// On click of restart button, everything is restarted to its initial value
restartButton.addEventListener("click", function() {
  resetOperations()
  period = false
  num = 0
  numString = ""
  result = 0
  textOutput.textContent = 0
})
