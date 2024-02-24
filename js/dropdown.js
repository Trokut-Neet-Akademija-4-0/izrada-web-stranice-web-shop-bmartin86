// Otvori dropdown klikom na button i promijeni ikonu
function myFunction(event, el) {
   event.stopPropagation(); // Stop event propagation
   el.nextElementSibling.classList.toggle("show");
   console.log(el);
   var img = el.querySelector('.myImage');
   if (img.src.includes('angle-down-solid.svg')) {
      img.src = 'images/icons/angle-up-solid.svg';
      img.alt = 'arrow up icon';
   } else {
      img.src = 'images/icons/angle-down-solid.svg'; 
   }
}
//Zatvori dropdown na klik izvan elementa i vrati ikonu
window.addEventListener('click', function(event) {
   event.stopPropagation();
   var dropdown = document.getElementById('products-aside');
   if (event.target !== dropdown && !dropdown.contains(event.target)) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            var images = document.getElementsByClassName('myImage');
            for (var z = 0; z < images.length; z++) {
               var img = images[z];
               if (img.src.includes('angle-up-solid.svg')) {
                  img.src = 'images/icons/angle-down-solid.svg';
                  img.alt = 'arrow down icon' ;
               }
            }
         }
      }
   }
});