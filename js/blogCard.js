function loadBlogCard() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    // Get all elements with the class 'blogCard'
    const blogCards = document.getElementsByClassName("blogCard")
    // Iterate through the elements and update their content
    for (let i = 0; i < blogCards.length; i++) {
      blogCards[i].innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "../partials/blogCard.html");
  xhttp.send();
}
loadBlogCard();