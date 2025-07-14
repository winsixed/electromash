// burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

// cookie banner
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");

  if (!localStorage.getItem("cookieAccepted")) {
    banner.style.display = "flex";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", "true");
    banner.style.display = "none";
  });
});
