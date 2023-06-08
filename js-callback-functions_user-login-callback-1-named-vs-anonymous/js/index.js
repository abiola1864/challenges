console.clear();

function ShowWelcomeMessage() {

 console.log ("Welcome! You are logged in now.")
}

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();

}



// Calling handleUserLogin and passing the named callback function
handleUserLogin(ShowWelcomeMessage);




// Calling handleUserLogin and passing an anonymous function
handleUserLogin(() => {
  console.log("Welcome! You are logged in now.");
});