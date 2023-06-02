console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}








form.addEventListener("submit", (event) => {
  event.preventDefault();

    // --v-- write your code here --v--

  let result;

  const numberA = parseFloat(form.elements.numberA.value);
  const numberB = parseFloat(form.elements.numberB.value);
  const operator = form.elements.operator.value;

  if (operator === "addition") {
    result = add(numberA, numberB);
  } else if (operator === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (operator === "multiplication") {
    result = multiply(numberA, numberB);
  } else if (operator === "division") {
    result = divide(numberA, numberB);
  } else {
    result = "Invalid operator";
  }
  // --^-- write your code here --^--
  resultOutput.textContent = result;
});

