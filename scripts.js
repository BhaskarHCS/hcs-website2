/* -----------------------------------------
   DARK MODE
----------------------------------------- */
const toggle = document.getElementById("darkToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    localStorage.setItem("hcs-dark", document.body.classList.contains("dark"));
  });

  if (localStorage.getItem("hcs-dark") === "true") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
  }
}

/* -----------------------------------------
   HAMBURGER MENU
----------------------------------------- */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("open");
  });
}

if (mobileClose) {
  mobileClose.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
}

/* -----------------------------------------
   CALLBACK POPUP
----------------------------------------- */
const callbackBtn = document.getElementById("callbackBtn");
const callbackPopup = document.getElementById("callbackPopup");
const closeCallback = document.getElementById("closeCallback");

if (callbackBtn) {
  callbackBtn.addEventListener("click", () => {
    callbackPopup.classList.add("open");
  });
}

if (closeCallback) {
  closeCallback.addEventListener("click", () => {
    callbackPopup.classList.remove("open");
  });
}

/* -----------------------------------------
   CONTACT FORM SUCCESS BANNER
----------------------------------------- */
const contactForm = document.getElementById("contactForm");
const successBanner = document.getElementById("successBanner");

if (contactForm && successBanner) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic validation
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields.");
      return;
    }

    successBanner.style.display = "block";
    contactForm.reset();
  });
}
