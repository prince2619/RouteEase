// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;
var nav_links;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
  nav_links = document.querySelectorAll(".links a"); // Select all nav links
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

// Function to Handle Navigation Clicks
function handleNavigation(event) {
  event.preventDefault(); // Prevent default page reload
  const page = event.target.getAttribute("href"); // Get the href value
  if (page) {
    window.location.href = page; // Redirect directly
  }
}


function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });

  // Add Click Event to Navigation Links
  nav_links.forEach(link => {
    link.addEventListener("click", handleNavigation);
  });
}

events();

