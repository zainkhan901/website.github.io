// Navigation menu toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu--visible");
});

// Email newsletter form submission
const newsletterForm = document.querySelector("#newsletter-form");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const emailInput = newsletterForm.querySelector("#newsletter-email");
  const email = emailInput.value;

  // TODO: Add code to submit the email address to a backend service
  console.log(`Submitting email address: ${email}`);
  
  emailInput.value = "";
});

const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = searchForm.querySelector('input[name="search"]').value;
  
  // TODO: Add code to search for content on the website
  console.log(`Searching for: ${searchTerm}`);
  
  searchForm.reset();
});


// Google AdSense
// TODO: Add code to load Google AdSense script and display ads on the website


