console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}


function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}


// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // --v-- write your code here --v--

//   // --^-- write your code here --^--

//   // eslint-disable-next-line no-alert
//   alert("Form submitted");
// });


form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check if the checkbox is checked
  const tosCheckbox = document.getElementById("tos");
  if (!tosCheckbox.checked) {
    showTosError(); // Display the error message
    hideSuccessMessage(); // Hide the success message
    return; // Stop further execution
  }

  // Checkbox is checked, show the success message
  hideTosError(); // Hide the error message
  showSuccessMessage(); // Display the success message
});




