const firstChoiceButton = document.querySelector('[data-js="choice-button-1"]');
const AnswerButton = document.querySelector('[data-js="active-button"]');
const originalTextElement = document.querySelector('.item-text-cbox');
const conditionalTextElement = document.querySelector('.text-conditional');

firstChoiceButton.addEventListener("click", () => {
  firstChoiceButton.classList.toggle("dark");
  AnswerButton.classList.toggle("dark");

     // allows text content to be the content I set in the
    // html element called data-original-text
    // originalTextElement.textContent = originalTextElement.dataset.originalText;
  
    
  originalTextElement.textContent = originalTextElement.dataset.originalText;
  
  
  // eventlistener for the color and text toggles


  if (!firstChoiceButton.classList.contains("dark")) {
    // Show the conditional text and hide the original text
    originalTextElement.style.display = "none";
    conditionalTextElement.style.display = "block";

 
    AnswerButton.classList.remove("dark");
  } else {
    // Show the original text and hide the conditional text
    originalTextElement.style.display = "block";
    conditionalTextElement.style.display = "none";
    AnswerButton.classList.add("dark");
    
  }
});





window.addEventListener('load', function() {
  adjustFooterWidth();
});

window.addEventListener('resize', function() {
  adjustFooterWidth();
});

function adjustFooterWidth() {
  var containerWidth = document.getElementById('container').offsetWidth;
  var footer = document.querySelector('.footer');
  footer.style.width = containerWidth + 'px';
}




