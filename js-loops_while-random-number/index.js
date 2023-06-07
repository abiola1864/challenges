console.clear();

// `while` loop
let number = 0;
let count = 0;

while (number <= 0.9) {
  count++;
  console.log(number);
  number = Math.random();
}

console.log(`The number that ended the loop was ${number} and it took ${count} rounds to do this!`);
