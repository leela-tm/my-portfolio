function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// Simple form alert
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! (This is a demo)");
});
