// Get the textarea, character count, and error message elements
const textarea = document.getElementById('your-question');
const characterCount = document.getElementById('character-count');
const errorMessage = document.getElementById('error-message');

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
