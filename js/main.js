const navModal = document.getElementById("navbarModal");
const navbar = document.querySelector(".navbar");
var btns = document.querySelectorAll(".nav-link, .dropdown-item");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        navModal.style.display = "none";
        const backdrop = document.querySelector(".modal-backdrop");
        if (backdrop) {
            backdrop.remove();
        }
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "0";
        navbar.style.paddingRight = "0";
    });
});

window.addEventListener("scroll", () => {
  const button = document.querySelector(".scroll-to-top");
  if (window.scrollY) { 
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
});

var typed = new Typed('.typed', {
    strings: ["Designer", "Developer", "Freelancer", "Photographer"],
    typeSpeed: 50,
    backSpeed: 60,
    backDelay: 1600,
    startDelay: 300,
    loop: true,
});