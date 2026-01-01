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
  const form = document.querySelector(".contact-form-wrapper form");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  });
});

