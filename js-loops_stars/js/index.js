console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');


// function renderStars() {
//   // reset the star container before rerendering stars
//   starContainer.innerHTML = "";

//   for (let i = 1; i <= 5; i++) {
//     const star = document.createElement("img");
//     star.src = "assets/star-empty.svg";
//     starContainer.appendChild(star);
//   }
// }

// renderStars();





// function renderStars(filledStars) {
//   // reset the star container before rerendering stars
//   starContainer.innerHTML = "";

//   for (let i = 1; i <= 5; i++) {
//     const star = document.createElement("img");
//     if (i <= filledStars) {
//       star.src = "assets/star-filled.svg";
//     } else {
//       star.src = "assets/star-empty.svg";
//     }
//     starContainer.appendChild(star);
//   }
// }

// renderStars(3);


function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    if (i <= filledStars) {
      star.src = "assets/star-filled.svg";
    } else {
      star.src = "assets/star-empty.svg";
    }
    star.addEventListener("click", function() {
      renderStars(i);
    });
    starContainer.appendChild(star);
  }
}

renderStars(3);
