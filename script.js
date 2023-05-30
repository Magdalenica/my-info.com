const contact = document.querySelector(".contact");
const footer = document.querySelector(".footer");
const topic = document.querySelector(".top");

contact.addEventListener("click", function pageDown() {
  window.scrollTo(0, 5000);
});

topic.addEventListener("click", function topPage() {
  window.scrollTo(0, 0);
});
