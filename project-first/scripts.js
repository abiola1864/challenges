const firstChoiceButton = document.querySelector('[data-js="choice-button-1"]');
const AnswerButton = document.querySelector('[data-js="active-button"]');
const originalTextElement = document.querySelector('.item-text-cbox');
const conditionalTextElement = document.querySelector('.text-conditional');
const quizContentElements = document.querySelectorAll('.item-text');
const answerOptionElements = document.querySelectorAll('.tag-container span');






let quizData = []; // Initialize an empty array to store quiz data
let currentIndex = -1; // Initialize the current quiz line index to -1
let updateTimeout = null; // Store the timeout reference

// Function to choose the next quiz line and update the content and answer options
function updateQuiz() {
  // Increment the current index
  currentIndex = (currentIndex + 1) % quizData.length;

  // Get the quiz line at the current index
  const quizLine = quizData[currentIndex];

  // Randomize the order of answer options
  const answerOptions = [
    quizLine.tag1,
    quizLine.tag2,
    quizLine.tag3
  ].sort(() => Math.random() - 0.5);

  // Update the quiz content and randomized answer options
  quizContentElements.forEach((contentElement) => {
    contentElement.textContent = quizLine.content;
  });

  answerOptionElements.forEach((answerOptionElement, index) => {
    answerOptionElement.textContent = answerOptions[index];
    
  });
}


// Load the quiz data from the CSV file
fetch('quiz.csv')
  .then(response => response.text())
  .then(data => {
    quizData = Papa.parse(data, { header: true }).data;
    updateQuiz(); // Initial update of quiz content and answer options
  })
  .catch(error => {
    console.error('Error:', error);
  });












firstChoiceButton.addEventListener("click", () => {
  firstChoiceButton.classList.toggle("dark");
  AnswerButton.classList.toggle("dark");
  //      // allows text content to be the content I set in the
//     // html element called data-original-text
 originalTextElement.textContent = originalTextElement.dataset.originalText;
  

  if (!firstChoiceButton.classList.contains("dark")) {
    originalTextElement.style.display = "none";
    conditionalTextElement.style.display = "block";
    AnswerButton.classList.remove("dark");
  } else {
    originalTextElement.style.display = "block";
    conditionalTextElement.style.display = "none";
    AnswerButton.classList.add("dark");
  }

  // Clear the previous timeout
  clearTimeout(updateTimeout);

    // Schedule the quiz update after 1 second
    updateTimeout = setTimeout(() => {
      updateQuiz();
originalTextElement.textContent=  conditionalTextElement.textContent ; // Restore the original text
      firstChoiceButton.classList.remove("dark"); // Remove the "dark" class
      AnswerButton.classList.remove("dark"); // Remove the "dark" class
  
    }, 1000);
 
});













// Get the footer element
const footer = document.querySelector('.footer');

// Function to add the 'hover' class to the footer when the mouse enters the area
function handleMouseEnter() {
  footer.classList.add('hover');
}

// Function to remove the 'hover' class from the footer when the mouse leaves the area
function handleMouseLeave() {
  footer.classList.remove('hover');
}

// Add event listeners to the footer for mouse enter and leave events
footer.addEventListener('mouseenter', handleMouseEnter);
footer.addEventListener('mouseleave', handleMouseLeave);











// const firstChoiceButton = document.querySelector('[data-js="choice-button-1"]');
// const AnswerButton = document.querySelector('[data-js="active-button"]');
// const originalTextElement = document.querySelector('.item-text-cbox');
// const conditionalTextElement = document.querySelector('.text-conditional');

// firstChoiceButton.addEventListener("click", () => {
//   firstChoiceButton.classList.toggle("dark");
//   AnswerButton.classList.toggle("dark");

//      // allows text content to be the content I set in the
//     // html element called data-original-text
//     // originalTextElement.textContent = originalTextElement.dataset.originalText;
  
    
//   originalTextElement.textContent = originalTextElement.dataset.originalText;
  
  
//   // eventlistener for the color and text toggles


//   if (!firstChoiceButton.classList.contains("dark")) {
//     // Show the conditional text and hide the original text
//     originalTextElement.style.display = "none";
//     conditionalTextElement.style.display = "block";

 
//     AnswerButton.classList.remove("dark");
//   } else {
//     // Show the original text and hide the conditional text
//     originalTextElement.style.display = "block";
//     conditionalTextElement.style.display = "none";
//     AnswerButton.classList.add("dark");
    
//   }
// });






