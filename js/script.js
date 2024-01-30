window.onload = function() {
  var video = document.getElementById("hero-video");
  video.play();
};


window.onscroll = function () {
  scroll();
};

function scroll() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 60 && scrollTop <= 720) {
   document.getElementById("header-wrapper").style.top = "0";
  } else {
   document.getElementById("header-wrapper").style.top = "-139px";
  }
};