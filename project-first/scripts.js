const firstChoiceButton = document.querySelector('[data-js="choice-button-1"]');
const AnswerButton = document.querySelector('[data-js="active-button"]');
const originalTextElement = document.querySelector('.item-text-cbox');
const conditionalTextElement = document.querySelector('.text-conditional');
const quizContentElements = document.querySelectorAll('.item-text');
const answerOptionElements = document.querySelectorAll('.tag-container span');






let quizData = []; // Initialize an empty array to store quiz data
let currentIndex = -1; // Initialize the current quiz line index to -1
let updateTimeout = null; // Store the timeout reference

// Define variables to store the updated quiz content and tags
let updatedContent = '';
let updatedTags = [];

// Function to update the quiz content and tags
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

  // Store the updated content and tags
  updatedContent = quizLine.content;
  updatedTags = answerOptions;

  // Update the quiz content and randomized answer options
  quizContentElements.forEach((contentElement) => {
    contentElement.textContent = updatedContent;
  });

  answerOptionElements.forEach((answerOptionElement, index) => {
    answerOptionElement.textContent = updatedTags[index];
  });
}

// Create the bookmarked card with updated content and tags
function createBookmarkedCard() {
  // Create the necessary HTML elements
  const listItem = document.createElement('li');
  listItem.classList.add('card-list__item');

  const article = document.createElement('article');
  article.classList.add('card', 'card2');

  // ... Rest of the code to create other elements ...

  // Use the updated content and tags in the card
  cardText.textContent = updatedContent;
  tag1.textContent = updatedTags[0];
  tag2.textContent = updatedTags[1];
  tag3.textContent = updatedTags[2];

  // ... Rest of the code to append elements ...

  // Append the bookmarked card to the card list
  cardList.appendChild(listItem);
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




const bookmarkIcon = document.querySelector('.bookmark-icon');

bookmarkIcon.addEventListener('click', () => {
  bookmarkIcon.classList.toggle('active');
});

















// Get the parent element where the bookmarked cards will be added
const cardList = document.querySelector('.card-list');



// Create the bookmarked card
function createBookmarkedCard() {
  // Create the necessary HTML elements


  const listItem = document.createElement('li');
  listItem.classList.add('card-list__item');

  const article = document.createElement('article');
  article.classList.add('card', 'card2');

  const bookmarkIconClick = document.createElement('span');
  bookmarkIconClick.classList.add('bookmark-icon-click');
  bookmarkIconClick.innerHTML = '<i class="fas fa-bookmark"></i>';

    // Apply the color style to the bookmark icon
    const bookmarkIconElement = bookmarkIconClick.querySelector('.fas.fa-bookmark');
    bookmarkIconElement.style.color = 'red';
    bookmarkIconElement.style.fontSize = '30px';

  const cardText = document.createElement('h2');
  cardText.classList.add('item-text');
  cardText.textContent = updatedContent;

  const cardButton = document.createElement('button');
  cardButton.classList.add('cardbox');
  cardButton.dataset.js = 'choice-button-1';

  const buttonText = document.createElement('h2');
  buttonText.classList.add('item-text-cbox');
  buttonText.dataset.originalText = 'Hide Answer';
  buttonText.textContent = 'Show Answer';

  const conditionalText = document.createElement('h2');
  conditionalText.classList.add('text-conditional');
  conditionalText.textContent = 'Show Answer';

  const tagContainer = document.createElement('div');
  tagContainer.classList.add('tag-container');

  const tag1 = document.createElement('span');
  tag1.classList.add('tag1');
  tag1.dataset.js = 'active-button';
  tag1.textContent = updatedTags[0];

  const tag2 = document.createElement('span');
  tag2.classList.add('tag');
  tag2.textContent = updatedTags[1];

  const tag3 = document.createElement('span');
  tag3.classList.add('tag');
  tag3.textContent = updatedTags[2];

  // Append the elements to their respective parent elements
  cardButton.appendChild(buttonText);
  cardButton.appendChild(conditionalText);

  tagContainer.appendChild(tag1);
  tagContainer.appendChild(tag2);
  tagContainer.appendChild(tag3);

  article.appendChild(bookmarkIconClick);
  article.appendChild(cardText);
  article.appendChild(cardButton);
  article.appendChild(tagContainer);

  listItem.appendChild(article);

  // Append the bookmarked card to the card list
  cardList.appendChild(listItem);

 
  

}




// Add click event listener to the bookmark icon
bookmarkIcon.addEventListener('click', () => {


  // Check if the bookmark icon is active
  const isBookmarked = bookmarkIcon.classList.contains('active');

  if (isBookmarked) {
    // Create the bookmarked card
    createBookmarkedCard();
  }

  
});










