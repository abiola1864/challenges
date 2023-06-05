console.clear();

const form = document.querySelector('[data-js="form"]');




form.addEventListener("submit", (event) => {
    event.preventDefault();
// console.log(formElements.checkbox.checked);
const formData = new FormData(event.target);
console.log("formData", formData);
const data = Object.fromEntries(formData);
console.log("data", data);
})



form.addEventListener("submit", (event) => {
    event.preventDefault();
const formData = new FormData(event.target);
console.log("formData", formData);
const data = Object.fromEntries(formData);
console.log("data", data);
const ageBadnessSum = parseInt(data.age) + parseInt(data.badness);
const firstName =data.firstName; 
console.log(`The age-badness-sum of "${firstName}" is ${ageBadnessSum}`);
})

