function myFunction(el) {
   el.nextElementSibling.classList.toggle("show");
   console.log(el);
   var img = el.querySelector('.myImage');
   if (img.src.includes('angle-down-solid.svg')) {
      img.src = '../images/icons/angle-up-solid.svg';
      img.alt = 'arrow up icon';
   } else {
      img.src = '../images/icons/angle-down-solid.svg'; 
   }
   event.stopPropagation(); // Stop event propagation
}
//Zatvori dropdown na klik izvan elementa
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
           openDropdown.classList.remove('show');
           var images = document.getElementsByClassName('myImage');
           for (var z = 0; z < images.length; z++) {
              var img = images[z];
              if (img.src.includes('angle-up-solid.svg')) {
                 img.src = '../images/icons/angle-down-solid.svg';
                 img.alt = 'arrow down icon' ;
              }
           }
        }
     }
  }
}