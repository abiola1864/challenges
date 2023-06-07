// Get the textarea, character count, and error message elements
const textarea = document.getElementById('your-question');
const characterCount = document.getElementById('character-count');
const errorMessage = document.getElementById('error-message');
const form =document.querySelector('[data-js="form"]')



// Add an input event listener to the textarea
textarea.addEventListener('input', function() {
  const maxLength = parseInt(textarea.getAttribute('maxlength'));
  const currentLength = textarea.value.length;
  const remaining = maxLength - currentLength;

  // Update the character count
  characterCount.innerHTML = `Characters remaining: ${remaining}`;

  // Display an error message if the character limit is exceeded
  if (remaining <= 0) {
    errorMessage.innerHTML = 'Character limit exceeded.';
  } else {
    errorMessage.innerHTML = ''; // Clear the error message
    errorMessage.style.color = 'red'; // Set the error message color to red
  }
});








form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  
    console.log(data);
     // Use the form data in your code
  const yourQuestion = data["your-question"];
  const yourAnswer = data["your-answer"];
  const yourTag = data["your-tag"];
  
  // Use the form data to create a new article or perform any other action
  const article = document.createElement('article');
  article.innerHTML = `
    <article class="card card2">
      <span class="bookmark-icon-click"><i class="fas fa-bookmark"></i></span>
      <h2 class="item-text">${yourQuestion}</h2>
      <button class="cardbox" data-js="choice-button-1">
        <h2 class="item-text-cbox" data-original-text="Hide Answer">Show Answer</h2>
        <h2 class="text-conditional">Show Answer</h2>
      </button>
      <div class="tag-container">
        <span class="tag1" data-js="active-button">${yourTag}</span>
      </div>
    </article>
  `;
  
  article.classList.add('centered');
  
  




  // Apply animation to the submit button
  const submitButton = event.target.querySelector('button[type="submit"]');
  submitButton.classList.add('animate');

  // Remove the animation class after a certain time
  setTimeout(() => {
    submitButton.classList.remove('animate');
  }, 300);




// Clear the textarea content
form.reset();


document.body.append(article);

//    // Append the card to the desired location in index.html
//  const targetArticle = document.querySelector('#target-article');
//  targetArticle.appendChild(article);


  
  
  });
  
  











