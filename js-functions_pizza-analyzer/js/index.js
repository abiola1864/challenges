 console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');


// ### 1 Calculate the Pizza Gain

// // First, we want to calculate the difference of the two pizza areas for two given pizza diameters.
//  For that, do the following:
// // 1. Write a function `calculatePizzaGain` which expects the two diameters of the two pizzas: `diameter1` and `diameter2`. (Not the radii of the pizzas!)
// // 2. Inside this function, calculate the areas of both pizzas.
// //    > 💡 you can find the formula for that online. The value of pi can be accessed via `Math.PI`.
// // 3. Calculate the pizza gain in percent relative to the first pizza
// //    > 💡 The formula is: `(area2 - area1) / area1 * 100`.
// // 4. Set the `textContent` of the output element to that value. Use `Math.round(calculatedValue)`
//  to round the pizza gain to the next whole integer value.
// // 5. Inside both event listeners, save the current values of both pizza inputs in two variables `pizzaSize1` and `pizzaSize2`
// //    > 💡 You can use the queried elements and get their value like this: `pizzaInput.value`
// // 6. Now call the function and pass in the two pizza sizes as the arguments.



// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  
  const area1 = Math.PI * ((diameter1/2)**2);
  const area2 = Math.PI * ((diameter2/2)**2);
  
  const gain =(area2-area1)/area1* 100

  output.textContent= Math.round(gain)

 }
 

 calculatePizzaGain(10, 20)




pizzaInput1.addEventListener("input", () => {
  

  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2)
   
 
});

pizzaInput2.addEventListener("input", () => {

  const pizzaSize1 = pizzaInput1.value
  const pizzaSize2 = pizzaInput2.value
  calculatePizzaGain(pizzaSize1, pizzaSize2)
   
});


// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
