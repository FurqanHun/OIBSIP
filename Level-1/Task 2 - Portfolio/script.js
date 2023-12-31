const goToTopButton = document.getElementById("goToTopButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
});

const navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', function() {
  const navbarCollapse = document.querySelector('#navbar-collapse');

  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  } else {
    navbarCollapse.classList.add('show');
  }
});

const body = document.querySelector("body");

// Add a blur class to the body when the button is clicked
goToTopButton.addEventListener("click", () => {
  body.classList.add("blur");
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Remove the blur class when the scroll event is done
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    body.classList.remove("blur");
  }
});

const navhead = document.getElementById("navhead");

navhead.addEventListener("click", () => {
  location.reload();
}); // Reloads the page when the Furqan Hun in navbar is clicked