function shake_all() {
  var elements = document.getElementsByTagName("*");
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.add("shakable");
  }
}

function shake_off() {
  var elements = document.getElementsByTagName("*");
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.remove("shakable");
  }
}

/window.onload = function() {
  window.onscroll = function() {addStickyClassToNavbar();};
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function addStickyClassToNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
}
/
