console.clear();




// function promptUser() {
//   const userName = prompt("Abiola");
//   showWelcomeMessage(userName, "admin");
// }


// The exercise starts here!


// Predefined function for retrieving the username
function getUserName(username) {
  return username;
}



function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}


function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}



function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}


const UserNames = ["Abiola", "James", "Taye", "Jane Doe"]




UserNames.forEach(userName => {
  handleUserLogin(showWelcomeMessage, showErrorMessage, getUserName(userName));
});


// handleUserLogin(showWelcomeMessage, showErrorMessage, getUserName());



