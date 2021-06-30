function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("content-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}
// Dashboards-----------------------
function openDash(clk, dashName) {
  var d, e, dashlinks;
  e = document.getElementsByClassName("dash-content");
  for (d = 0; d < e.length; d++) {
    e[d].style.display = "none";
  }
  dashlinks = document.getElementsByClassName("board");
  for (d = 0; d < e.length; d++) {
    dashlinks[d].className = dashlinks[d].className.replace("is-active", "");
  }
  document.getElementById(dashName).style.display = "block";
  clk.currentTarget.className += " is-active";
}
//Back To Top
//Get the button:
mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
/*---------------------------------------------------*/
//Mobile Nav burger
document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
//Tools access
function ValidatePassword() {
  var password = prompt("Please enter password to proceed", "");

  if (password == "assurance@123") {
    return true;
  }
  return false;
}

