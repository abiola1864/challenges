function toggleContent() {
  var fullContent = document.getElementById("full-content");
  var moreLink = document.getElementById("more-link");

  if (fullContent.style.display === "none") {
      fullContent.style.display = "block";
      moreLink.innerHTML = "Less";
  } else {
      fullContent.style.display = "none";
      moreLink.innerHTML = "More";
  }
}