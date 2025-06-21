document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Thanks for your message! We'll get back to you soon.";
  this.reset();
});
