window.onscroll = function () {
  scroll();
};
 function scroll() {
   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("wrapper").style.top = "0";
   } else {
    document.getElementById("wrapper").style.top = "-128px";
   }
 };
 window.onload = function() {
   var video = document.getElementById("hero-video");
   video.play();
 };