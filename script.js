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
//------- ---Dashboards--------------//
function myFunction(e) {
  var active = document.querySelectorAll(".is-active1");
  [].forEach.call(active, function (el) {
    el.classList.remove("is-active1");
  });
  e.target.className = "is-active1";
}

var isLinkInserted = false;
function myFunction1() {
  if (isLinkInserted === false) {
    document.getElementById("dashboards").src =
      "https://datastudio.google.com/embed/reporting/55d26a2f-d344-4d37-a8fb-34c792c804d1/page/jKlQC";
    document.body.removeEventListener("click", myFunction1);
  }
  isLinkInserted = true;
}
//----------------------------------------------------
//Dashboard Reload
function refreshIframe() {
  var ifr = document.getElementsByName("dashboards")[0];
  ifr.src = ifr.src;
}
//---------------------------------------------------
//Admin Dashboards Access
function restaurants() {
  if (document.getElementById("password").value !== "assurance@123") {
    document.getElementById("dashboards").src = "";
    document.getElementById("response").innerHTML = "Incorrect password 🤨";
  } else {
    document.getElementById("dashboards").src =
      "https://datastudio.google.com/embed/reporting/c5071f7b-23ac-4a94-9856-5ea7547f1dff/page/jKlQC";
    document.getElementById("pass-box").style.display = "none";
  }
}
function queries() {
  if (document.getElementById("password").value !== "assurance@123") {
    document.getElementById("dashboards").src = "";
    document.getElementById("response").innerHTML = "Incorrect password 🤨";
  } else {
    document.getElementById("dashboards").src =
      "https://datastudio.google.com/embed/reporting/49454e7b-3ef0-4d81-9d68-70a2d118fdf4/page/jKlQC";
    document.getElementById("pass-box1").style.display = "none";
  }
}
function warnings() {
  if (document.getElementById("password").value !== "assurance@123") {
    document.getElementById("dashboards").src = "";
    document.getElementById("response").innerHTML = "Incorrect password 🤨";
  } else {
    document.getElementById("dashboards").src =
      "https://datastudio.google.com/embed/reporting/87519d28-32cd-4408-813d-058e8ddd3887/page/hQAwB";
    document.getElementById("pass-box2").style.display = "none";
  }
}
function adherence() {
  if (document.getElementById("password").value !== "assurance@123") {
    document.getElementById("dashboards").src = "";
    document.getElementById("response").innerHTML = "Incorrect password 🤨";
  } else {
    document.getElementById("dashboards").src =
      "https://datastudio.google.com/embed/reporting/87519d28-32cd-4408-813d-058e8ddd3887/page/hQAwB";
    document.getElementById("pass-box3").style.display = "none";
  }
}
