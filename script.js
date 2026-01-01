function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

AOS.init({
  duration: 1000,
  delay: 0,
  offset: 400,
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent!");
    });
  }
});
