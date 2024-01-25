  // document.addEventListener("DOMContentLoaded", function () {
  //   function adjustIframeHeight(iframe) {
  //     iframe.onload = function () {
  //       var frameContent = iframe.contentDocument || iframe.contentWindow.document;
  //       var object = frameContent.querySelector("object");
  //       var frameBody = frameContent.querySelector("body");
  //       var height = object.offsetHeight;
  //       frameBody.style.margin = 0;
  //       iframe.style.height = height + 'px';
  //     };
  //   }
  //   var iframes = document.querySelectorAll('.auto-height-iframe');
  //   iframes.forEach(adjustIframeHeight);
  // });

  //load header
  function loadHeader() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      document.getElementById("header").innerHTML = this.responseText;
    }
    xhttp.open ("GET", "../partials/header.html");
    xhttp.send();
  }
  loadHeader();


  //loadProductCard
  function loadProductCard() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      // Get all elements with the class 'productCard'
      const productCards = document.getElementsByClassName("productCard");
  
      // Iterate through the elements and update their content
      for (let i = 0; i < productCards.length; i++) {
        productCards[i].innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "../partials/productCard.html");
    xhttp.send();
  }
  loadProductCard();



  //loadBlogCard
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


  //loadBlogCardLandscape
  function loadBlogCardLandscape() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      // Get all elements with the class 'blogCardLandscape'
      const blogCardLandscape = document.getElementsByClassName("blogCardLandscape");
  
      // Iterate through the elements and update their content
      for (let i = 0; i < blogCardLandscape.length; i++) {
        blogCardLandscape[i].innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "../partials/blogCardLandscape.html");
    xhttp.send();
  }
  loadBlogCardLandscape();


  //load asideBlog
  function loadAsideBlog() {
    loadBlogCard();
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      document.getElementById("asideBlog").innerHTML = this.responseText;
    }
    xhttp.open ("GET", "../partials/asideBlog.html");
    xhttp.send();
  }
  loadAsideBlog();


  //load footer
  function loadFooter() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      document.getElementById("footer").innerHTML = this.responseText;
    }
    xhttp.open ("GET", "../partials/footer.html");
    xhttp.send();
  }
  loadFooter();