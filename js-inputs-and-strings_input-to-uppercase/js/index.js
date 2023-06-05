console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

var nameInput = document.querySelector("#first-input");
var convertButton = document.querySelector("[data-js='button-uppercase']");

convertButton.addEventListener("click", function() {
  var UpperInputValue = nameInput.value.toUpperCase();
  nameInput.value = UpperInputValue ;
});
s