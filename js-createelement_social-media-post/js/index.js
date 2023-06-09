console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.


const secondPost = document.createElement("article")
secondPost.classList.add("post")







secondPost.innerHTML =
`
<p class="post__content">
Lorem ipsum dolor, sit amet consectetur adipisicing elit.
</p>
<footer class="post__footer">
<span class="post__username">@username</span>
<button type="button" class="post__button" data-js="like-button">
  ♥ Like
</button>
</footer>

`;





document.body.append(secondPost);

const handleLikeButton = secondPost.querySelector(".post__button");

handleLikeButton.addEventListener("click", () => {
  handleLikeButton.classList.add("post__button--liked");
});
