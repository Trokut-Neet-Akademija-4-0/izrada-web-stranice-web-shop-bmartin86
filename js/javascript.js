//load header
if (document.getElementById("header")) {
  function loadHeader() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      document.getElementById("header").innerHTML = this.responseText;
    }
    xhttp.open ("GET", "partials/header.html");
    xhttp.send();
  }
  loadHeader();
}


//loadProductCard
if (document.getElementsByClassName("productCard")) {
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
    xhttp.open("GET", "partials/productCard.html");
    xhttp.send();
  }
  loadProductCard();
}


//load productListCard
if (document.getElementById("productListCard") || document.getElementById("productListCardTwo")) {
  function loadProductListCard() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      if (document.getElementById("productListCard")) {
        document.getElementById("productListCard").innerHTML = this.responseText;
      } else if (document.getElementById("productListCardTwo")) {
        document.getElementById("productListCardTwo").innerHTML = this.responseText;
      } else if (document.getElementById("productListCard") && document.getElementById("productListCardTwo")){
        document.getElementById("productListCard").innerHTML = this.responseText;
        document.getElementById("productListCardTwo").innerHTML = this.responseText;
      }
      loadProductCard();
    }
    xhttp.open ("GET", "partials/productListCard.html");
    xhttp.send();
  }
  loadProductListCard();
}


//load productCategories
if (document.getElementById("productCategories")) {
  function loadProductCategories() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      document.getElementById("productCategories").innerHTML = this.responseText;
      loadProductListCard();
    }
    xhttp.open ("GET", "partials/productCategories.html");
    xhttp.send();
  }
  loadProductCategories();
}


//load asideProducts
if(document.getElementById("asideProducts")) {
  function loadAsideProducts() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      document.getElementById("asideProducts").innerHTML = this.responseText;
    }
    xhttp.open ("GET", "partials/asideProducts.html");
    xhttp.send();
  }
  loadAsideProducts();  
}

  
//loadBlogCard
if (document.getElementsByClassName("blogCard")) {
  function loadBlogCard() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      
      // Get all elements with the class 'blogCard'
      const blogCards = document.getElementsByClassName("blogCard");
      // Iterate through the elements and update their content
      for (let i = 0; i < blogCards.length; i++) {
        
        blogCards[i].innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "partials/blogCard.html");
    xhttp.send();
  }
}  


//loadBlogCardLandscape
if ( document.getElementsByClassName("blogCardLandscape")) {
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
    xhttp.open("GET", "partials/blogCardLandscape.html");
    xhttp.send();
  }
  loadBlogCardLandscape();
}
 

//load asideBlog
if(document.getElementById("asideBlog")) {
  function loadAsideBlog() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      document.getElementById("asideBlog").innerHTML = this.responseText;
      loadBlogCard();
    }
    xhttp.open ("GET", "partials/asideBlog.html");
    xhttp.send();
  }
  loadAsideBlog();
}


//load footer
function loadFooter() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("footer").innerHTML = this.responseText;
  }
  xhttp.open ("GET", "partials/footer.html");
  xhttp.send();
}
loadFooter();